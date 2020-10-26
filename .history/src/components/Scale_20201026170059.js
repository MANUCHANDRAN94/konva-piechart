import React, { Fragment } from 'react';
import { Text, Rect } from 'react-konva';

const Scale = ({ idx, width, height, radius, data, totalInput }) => {
    return <Fragment>
        <Rect width={width / 20} height={height / 30} fill={data.color} x={width / 5} y={height - idx * height / totalInput} stroke="black" strokeWidth={1} />
        <Text text={data.product.slice(0, 1).toUpperCase() + data.product.slice(1)} x={idx * width / 5 + (width / 15)} y={0} width={60} fontSize={radius / 10} />
    </Fragment>
}

export default Scale;