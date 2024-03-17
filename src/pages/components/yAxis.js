import React from 'react';

const YAxis = ({ yScale, height, axisLabel, offsetX }) => {
    if (yScale) {
        const ticks = yScale.ticks(); // Using ticks for the Y-axis

        return (
            <g transform={`translate(${offsetX}, 0)`}>
                {/* Y-axis line */}
                <line x1={0} y1={0} x2={0} y2={height} stroke="black" />
                {/* Axis label */}
                <text style={{ textAnchor: "end", fontSize: '15px' }} transform={`translate(15,3)rotate(-90)`}>
                    {axisLabel}
                </text>
                {/* Y-axis ticks */}
                {ticks.map((tick, index) => (
                    <g key={index} transform={`translate(0, ${yScale(tick)})`}>
                        <line x1={0} y1={0} x2={-6} y2={0} stroke="black" />
                        <text style={{ textAnchor: 'end', fontSize: '8px' }} transform={`translate(-10, 4)`}>
                            {tick}
                        </text>
                    </g>
                ))}
            </g>
        );
    } else {
        return null;
    }
};

export default YAxis;
