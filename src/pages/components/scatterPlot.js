import React from 'react';
import Points from './Points'; // Assuming this path is correct
import YAxis from './YAxis'; // Adjust the path as necessary
import XAxis from './XAxis'; // Adjust the path as necessary

// Updated function signature to accept the additional props
function ScatterPlot({ offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY }) {
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points
                data={data}
                xScale={xScale}
                yScale={yScale}
                height={height}
                width={width}
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
                setTooltipX={setTooltipX}
                setTooltipY={setTooltipY}
            />
            <YAxis yScale={yScale} height={height} axisLabel="Trip duration end in" />
            <XAxis xScale={xScale} height={height} width={width} axisLabel="Trip duration start from" />
        </g>
    );
}

export default ScatterPlot;