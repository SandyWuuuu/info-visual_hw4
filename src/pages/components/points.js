import React from 'react';

function Points({ data, xScale, yScale, selectedStation, setSelectedStation,setTooltipX, setTooltipY  }) {
    const getColor = (station) => station === selectedStation ? 'red' : 'steelblue';

    // Enhance handleMouseEnter to prevent flickering by not resetting if already selected
    const handleMouseEnter = (station, event) => {
        if (station !== selectedStation) {
            setSelectedStation(station);
            setTooltipX(event.pageX);
            setTooltipY(event.pageY);
        }
    };

    // Introduce a slight delay before deselecting to improve user experience
    // This delay helps to prevent accidental deselection if the user quickly moves between points
    const handleMouseLeave = (station) => {
        setTimeout(() => {
            if (station === selectedStation) {
                setSelectedStation(null);
            }
        }, 50); // Adjust the delay as needed for optimal user experience
    };

    return (
        <g className="points">
            {data.map((d, index) => (
                <circle
                    key={index}
                    cx={xScale(d.start)}
                    cy={yScale(d.end)}
                    r={d.station === selectedStation ? 10 : 5}
                    fill={getColor(d.station)}
                    onMouseEnter={(event) => handleMouseEnter(d.station, event)}
                    onMouseLeave={() => handleMouseLeave(d.station)}
                />
            ))}
            {/* Conditionally render the yellow background and the selected point on top */}
            {selectedStation && (
                <rect
                    x={0}
                    y={0}
                    width="100%"
                    height="100%"
                    fill="yellow"
                    fillOpacity="0.3"
                />
            )}
            {selectedStation && (
                <circle
                    cx={xScale(data.find(d => d.station === selectedStation).start)}
                    cy={yScale(data.find(d => d.station === selectedStation).end)}
                    r={10}
                    fill="red"
                />
            )}
        </g>
    );
}

export default Points;