// Bars.js
import React from 'react';

function Bars({ data, xScale, yScale, height, selectedStation, setSelectedStation }) {
    const getColor = (station) => station === selectedStation ? 'red' : 'steelblue';

    return (
        <g>
            {data.map((d, index) => (
                <rect
                    key={index}
                    x={xScale(d.station)}
                    y={yScale(d.start)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.start)}
                    fill={getColor(d.station)}
                    onMouseEnter={() => setSelectedStation(d.station)}
                    onMouseOut={() => setSelectedStation(null)}
                />
            ))}
        </g>
    );
}

export default Bars;
