import React, { Fragment } from 'react'
import { Group, Transformer } from 'react-konva'
import Pie from './Pie';
import Scale from './Scale'

const PieChart = ({ groupValue, groupValue: { x, y, height, width, dataCollection }, isSelected, onSelect, onChange }) => {
    const getSum = dataCollection => dataCollection.reduce((total, item) => total + item.value, 0)
    let sum = getSum(dataCollection);
    let totalDeg = 0;
    let getRotation = (idx, item) => {
        if (dataCollection.length - 1 === idx) {
            let current = totalDeg;
            totalDeg = 0;
            return current
        }
        else {
            let current = totalDeg;
            totalDeg += 360 / sum * item.value;
            return current
        }
    }

    const shapeRef = React.useRef();
    const trRef = React.useRef();
    React.useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            // console.log(trRef)
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    // console.log(getSum(dataCollection))
    // const [pieAngle, setPieAngle] = useState({

    // })
    return (
        <Fragment>

            <Group x={x} y={y} height={height} width={width}
                draggable onClick={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                onDragEnd={(e) => {
                    onChange({
                        ...groupValue,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransformEnd={(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...groupValue,
                        x: node.x(),
                        y: node.y(),
                        // set minimal value
                        width: Math.max(5, node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                    });
                }}>
                {/* <Circle x={width / 2} y={height / 2} stroke="black" radius={width / 2} />
            <Shape x={width / 2} y={height / 2} /> */}

                {/* Trying with svg */}
                {/* <Circle radius={100} x={width / 2} y={height / 2} fill="green" />
            <Circle radius={50} x={width / 2} y={height / 2} fill="transparent"
                stroke="tomato"
                strokeWidth={100}
                // stroke-dash={35 * 31.4 / 100}
                rotation={-90}
                stroke-dasharray="calc(35 * 31.4 / 100) 31.4"
                transform="rotate(-90) translate(-20)" /> */}

                {/* Trying with wedge */}

                {dataCollection.map((item, idx) => <Pie key={idx} idx={idx} width={width} height={height} radius={width > height ? height / 3 : width / 3} data={item} total={sum} rotation={getRotation(idx, item)} totalInput={dataCollection.length} />)}
                <Group x={width / 3 * 2} y={height * 2 / 3} width={width / 3}>
                    {dataCollection.map((item, idx) => <Scale key={idx} idx={idx} width={width / 1.7} height={height} radius={width > height ? height / 2 : width / 2} data={item} totalInput={dataCollection.length} />)}
                </Group>

            </Group >

            {isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </Fragment>
    )
}

export default PieChart
