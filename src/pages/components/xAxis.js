import { RouteMatcher } from 'next/dist/server/future/route-matchers/route-matcher';
import React from 'react';

// A more flexible XAxis component that can handle both band and linear scales.
const XAxis = ({ xScale, height, axisLabel }) => {
  // Determine if the scale is a band scale by checking for the existence of .bandwidth() function
  const isBandScale = xScale.bandwidth !== undefined;

  return (
    <g transform={`translate(0,${height})`}>
      {/* Axis Line */}
      <line x1={0} y1={0} x2={xScale.range()[1]} y2={0} stroke="black" />

      {/* Optional Axis Label */}
      {axisLabel && (
        <text
        style={{ textAnchor: "middle", fontSize: '15px' }}
        transform={`translate(490,-20) rotate(0) `} // Adjust the 40px offset as needed
              >
          {axisLabel}
        </text>
      )}

      {/* Ticks and Labels */}
      {xScale.ticks ? xScale.ticks().map((tickValue, index) => (
        // For linear scales, use ticks() method to generate tick values.
        // This provides better control over the number of ticks and their distribution.
        <g key={index} transform={`translate(${xScale(tickValue)}, 0)`}>
          <line y1={0} y2={6} stroke="black" />
          <text
            style={{ textAnchor: 'middle', fontSize: '10px' }}
            dy=".10em"
            y={9}
            x={0}
            transform="rotate(-45)"
          >
            {tickValue}
          </text>
        </g>
      )) : xScale.domain().map((tickValue, index) => (
        // For band scales, directly use domain() for tick values.
        // Position ticks in the center of each band.
        <g key={index} transform={`translate(${xScale(tickValue) + xScale.bandwidth() / 2}, 0)`}>
          <line y1={0} y2={6} stroke="black" />
          <text
            style={{ textAnchor: 'initial', fontSize: '10px' }}
            dy=".5em"
            dx = "0.6em"
            y={-1}
            x={0}
            transform = "rotate(85)"
          >
            {tickValue}
          </text>
        </g>
      ))}
    </g>
  );
};

export default XAxis;
