import React from 'react';
import { Group, Text, Rect } from 'react-konva';

const Scale = ({ idx, width, height, radius, data, totalInput }) => {
    return <Group x={idx * width / totalInput} y={height / 2 + radius + height / 10} >
        <Rect width={width / 25} height={height / 30} fill={data.color} x={idx * width / 5} stroke="black" strokeWidth={1} />
        <Text text={data.product.slice(0, 1).toUpperCase() + data.product.slice(1)} x={idx * width / 5 + (width / 15)} y={0} width={60} fontSize={radius / 10} />
    </Group>
}

export default Scale;