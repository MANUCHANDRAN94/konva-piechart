import React, { useEffect, useState } from 'react';
import { Layer, Stage, Text } from 'react-konva';
import PieGroup from './components/PieGroup';

/* ----------------------------- Initial values ----------------------------- */
// todo : make this a array of objects lateron
const initialValues = {
  id: 0,
  x: 100,
  y: 20,
  height: 400,
  width: 400,
  dataCollection: [
    { product: "apple", value: 120, color: "red", strokeColor: "white", strokeWidth: 2 },
    { product: "mango", value: 140, color: "yellow", strokeColor: "white", strokeWidth: 2 },
    { product: "guvava", value: 130, color: "green", strokeColor: "white", strokeWidth: 2 },
    { product: "grape", value: 100, color: "blue", strokeColor: "white", strokeWidth: 2 },
  ]
}

function App() {

  /* ------------------------- Usestate and UseEffcet ------------------------- */
  const [graphDetails, setGraphDetails] = useState(initialValues);
  const [selectedId, selectShape] = useState(null);

  useEffect(() => {
    setGraphDetails(preValue => {
      return {
        ...initialValues
      }
    })
  }, [])

  /* -------------------------------------------------------------------------- */

  /* ----------------------------- Other Functions ---------------------------- */
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  /* -------------------------------------------------------------------------- */

  return (
    <div className="pieChartContainer">
      <Stage x={0} y={0} width={window.innerWidth} height={window.innerHeight} onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
        <Layer>
          <Text x={10} width={(window.innerWidth - 200)} align="center" text="Pie Chart" stroke="black" fontSize={36} />
          {/* Make this a map function */}
          <PieGroup groupValue={graphDetails}
            isSelected={graphDetails.id === selectedId}
            onSelect={() => {
              selectShape(graphDetails.id);
            }}
            onChange={(newAttrs) => {
              // const rects = rectangles.slice();
              // rects[i] = newAttrs;
              setGraphDetails(newAttrs);
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
