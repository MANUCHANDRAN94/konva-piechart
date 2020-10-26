import React, { Fragment, useState } from "react";
import { Wedge, Text } from "react-konva";

const Pie = ({
  width,
  height,
  radius = 100,
  data,
  total,
  rotation,
  totalInput,
}) => {
  const [hover, setClick] = useState(false);
  const onMouseOver = (e) => {
    console.log(e.target.getStage().getPointerPosition());
    setClick(true);
  };
  const onMouseOut = (e) => {
    setClick(false);
  };
  // console.log("e.target")

  return (
    <Fragment>
      <Wedge
        name={data.product}
        x={width / 3}
        y={height / 2}
        radius={radius}
        angle={(360 / total) * data.value}
        fill={data.color}
        stroke={hover ? data.strokeColor : null}
        strokeWidth={hover ? data.strokeWidth : null}
        rotation={rotation}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={onMouseOut}
        scaleX={hover ? 1.1 : 1}
        scaleY={hover ? 1.1 : 1}
        shadowEnabled
        opacity={hover ? 0.8 : 1}
        shadowColor={hover ? "black" : "transparent"}
        shadowBlur={hover ? 10 : 0}
        shadowOpacity={hover ? 0.6 : 0}
        shadowOffsetX={hover ? 10 : 0}
        shadowOffsetY={hover ? 10 : 0}
      />
      {hover && (
        <Text
          text={Math.trunc((10000 / total) * data.value) / 100}
          x={0}
          y={50}
          fill='#333'
          fontSize={16}
          fontFamily='Arial'
        />
      )}
    </Fragment>
  );
};

export default Pie;
