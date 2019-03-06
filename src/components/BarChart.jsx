import React from 'react';
// import * as d3 from 'd3';
import { scaleBand, scaleLinear } from "d3-scale";
import { select } from "d3-selection";
import { max } from "d3-array";
import { axisBottom, axisLeft } from "d3-axis";

import { GREY } from '../lib/colors';

// class SingleBar extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {hover : false}
//     }

//     render() {
//     	return (
//     		<g>
//     		</g>
//     	)
//     }
// }

class BarChart extends React.Component {

    render() {
    	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    	const { inputData, width, height, getX, getY, color, radius } = this.props;

		// Make sure w and h would be larger than or equal to 0
		const w = Math.max(0, width - margin.left - margin.right);
		const h = Math.max(0, height - margin.top - margin.bottom);

		const x = scaleBand()
			.rangeRound([0, w])
			.padding(0.4);

		const y = scaleLinear().rangeRound([h, 0]);

		x.domain(inputData.map(getX));
		y.domain([0, max(inputData, getY)]);

		const axisX = axisBottom(x);
		const axisY = axisLeft(y).ticks(4);

    	return ( <svg className='bar-chart' width={width} height={height}>
    				<g transform={`translate(${margin.left}, ${margin.top})`}>
						{inputData.map((item, i) => {
							const bw = x.bandwidth();
							const bh = h - y(getY(item));
							return (
								<path
									d={`M${x(getX(item))},${h}
									v${-bh + radius}
									a${radius},${radius} 0 0 1 ${radius},${-radius}
									h${bw - 2 * radius}
									a${radius},${radius} 0 0 1 ${radius},${radius}
									v${bh - radius}Z`}
									key={`${i}`}
								/>
							);
						})}
						<g
							className="axis axis-x"
							transform={`translate(0, ${h})`}
							ref={node => {
								const axis = select(node).call(axisX);
								axis.selectAll(".tick line").remove();
							}}
						/>
						<g className="axis" ref={node => select(node).call(axisY)} />
					</g>
	    			<style>{`
				        path {
				          fill: ${color || GREY};
				        }
				        .axis {
				          color: ${GREY};
				          font-size: 0.8rem;
				        }
				        .axis-x {
				          font-size: calc(0.7rem + 0.2vw);
				        }
				      `}</style>
	    		 </svg> );
    }
}

export default BarChart;