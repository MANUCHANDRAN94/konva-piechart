import React, { useState } from 'react';
import { Group, Wedge, Text } from 'react-konva';


const Pie = ({ width, height, radius = 100, data, total, rotation, totalInput }) => {
    const [click, setClick] = useState(false)
    const onMouseOver = e => {
        // console.log(e.target)
        setClick(true)
    }
    const onMouseOut = e => {
        setClick(false)
    }
    // console.log("e.target")

    return (
        <Group x={0}
            y={0}
            height={height}
            width={width}>

            <Wedge
                name={data.product}
                x={height / 2}
                y={width / 2}
                radius={radius}
                angle={360 / total * data.value}
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
                opacity={click ? .8 : 1}
                shadowColor={click ? "black" : "transparent"}
                shadowBlur={click ? 10 : 0}
                shadowOpacity={click ? 0.6 : 0}
                shadowOffsetX={click ? 10 : 0}
                shadowOffsetY={click ? 10 : 0}
            />
            {click && <Text text={Math.trunc(10000 / total * data.value) / 100} />}


        </Group >
    )
}

export default Pie
