import React, { Fragment, useState } from "react";
import { Wedge, TextPath } from "react-konva";

const Pie = ({
  width,
  height,
  radius = 100,
  data,
  total,
  rotation,
  totalInput,
}) => {
  const [click, setClick] = useState(false);
  const onMouseOver = (e) => {
    // console.log(e.target)
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
        stroke={click ? data.strokeColor : null}
        strokeWidth={click ? data.strokeWidth : null}
        rotation={rotation}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={onMouseOut}
        scaleX={click ? 1.1 : 1}
        scaleY={click ? 1.1 : 1}
        shadowEnabled
        opacity={click ? 0.8 : 1}
        shadowColor={click ? "black" : "transparent"}
        shadowBlur={click ? 10 : 0}
        shadowOpacity={click ? 0.6 : 0}
        shadowOffsetX={click ? 10 : 0}
        shadowOffsetY={click ? 10 : 0}
      />
      {click && (
        <TextPath
          text={Math.trunc((10000 / total) * data.value) / 100}
          x={0}
          y={50}
          fill='#333'
          fontSize={16}
          fontFamily='Arial'
          data={"M0,10 C0,0 10,15 100,100 S300,150 400,50"}
        />
      )}
    </Fragment>
  );
};

export default Pie;
