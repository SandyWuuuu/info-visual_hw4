import React from 'react';
import Bars from './Bars'; // Ensure this path is correct
import XAxis from './XAxis'; // Adjust the path as necessary
import YAxis from './YAxis'; // Adjust the path as necessary

function BarChart({ offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation }) {
    return (
        <g transform={`translate(${offsetX},${offsetY})`}>
            {/* Pass selectedStation and setSelectedStation to Bars */}
            <Bars
                data={data}
                xScale={xScale}
                yScale={yScale}
                height={height}
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
            />
            <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"}/>
            <XAxis xScale={xScale} height={height} width={width} /> 
        </g>
    );
}

export default BarChart;
