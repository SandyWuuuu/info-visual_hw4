import React, { useState } from 'react';

function Bars({ data, xScale, yScale, height }) {
    // Hook to track the station name of the bar that is being hovered over
    const [selectedStation, setSelectedStation] = useState(null);

    // Function to determine the color of the bar based on hover state
    const getColor = (station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    if (!data) {
        return <g />;
    }

    return (
        <g>
            {data.map((d, index) => (
                <rect
                    key={index}
                    x={xScale(d.station)}
                    y={yScale(d.start)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.start)}
                    fill={getColor(d.station)} // Use the getColor function to dynamically set the fill color
                    onMouseEnter={() => setSelectedStation(d.station)} // Set the selectedStation when mouse enters a bar
                    onMouseOut={() => setSelectedStation(null)} // Clear the selectedStation when mouse leaves a bar
                >
                </rect>
            ))}
        </g>
    );
}

export default Bars;
