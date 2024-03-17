import React from 'react';

function Points({ data, xScale, yScale, selectedStation, setSelectedStation }) {
    const getColor = (station) => station === selectedStation ? 'red' : 'steelblue';
    const getRadius = (station) => station === selectedStation ? 10 : 5;

    // Split data into selected and non-selected points for separate rendering
    const nonSelectedPoints = data.filter(d => d.station !== selectedStation);
    const selectedPoint = data.find(d => d.station === selectedStation);

    return (
        <g className="points">
            {/* Render non-selected points */}
            {nonSelectedPoints.map((d, index) => (
                <circle
                    key={index}
                    cx={xScale(d.start)}
                    cy={yScale(d.end)}
                    r={getRadius(d.station)}
                    fill={getColor(d.station)}
                    onMouseEnter={() => setSelectedStation(d.station)}
                    onMouseOut={() => setSelectedStation(null)}
                />
            ))}
            {/* Render yellow rectangle if a station is selected */}
            {selectedStation && (
                <rect
                    x={0}
                    y={0}
                    width="100%" 
                    height="100%" // Adjust to your SVG's height
                    fill="yellow"
                    fillOpacity="0.3" 
                />
            )}
            {/* Render the selected point on top of the rectangle */}
            {selectedPoint && (
                <circle
                    cx={xScale(selectedPoint.start)}
                    cy={yScale(selectedPoint.end)}
                    r={10} 
                    fill="red" 
                />
            )}
        </g>
    );
}

export default Points;
