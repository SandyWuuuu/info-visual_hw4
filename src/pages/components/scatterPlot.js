import React, { useState } from 'react';
import Points from './Points';
import YAxis from './YAxis';
import XAxis from './XAxis';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale, height, width } = props;
    const [selectedStation, setSelectedStation] = useState(null);

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points
                data={data}
                xScale={xScale}
                yScale={yScale}
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
            />
            <YAxis yScale={yScale} height={height} axisLabel="Trip duration end in" />
            <XAxis xScale={xScale} height={height} width={width} axisLabel="Trip duration start from" />
        </g>
    );
}

export default ScatterPlot;
