import React from 'react';
import Bars from './Bars';
import XAxis from './XAxis';
import YAxis from './YAxis';

function BarChart(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width} = props;
    return (
        <g transform={`translate(${offsetX},${offsetY})`}>
            <Bars data={data} xScale={xScale} yScale={yScale} height={height}/>
            <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"}/>
            <XAxis xScale={xScale} height={height} width={width}  /> 
        </g>
    );
}

export default BarChart;
