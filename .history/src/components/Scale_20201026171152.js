import React, { Fragment } from 'react';
import { Text, Rect } from 'react-konva';

const Scale = ({ idx, width, height, radius, data, totalInput }) => {
    return <Fragment>
        <Rect width={width / 13} height={height / 30} fill={data.color} x={0} y={(idx * height / totalInput)} stroke="black" strokeWidth={1} />
        <Text text={data.product.slice(0, 1).toUpperCase() + data.product.slice(1)} x={width / 20} y={(idx * height / totalInput)} width={60} fontSize={radius / 10} />
    </Fragment>
}

export default Scale;