import React from 'react';
// import * as d3 from 'd3';
import { scaleBand, scaleLinear } from "d3-scale";
import { select } from "d3-selection";
import { max } from "d3-array";
import { axisBottom } from "d3-axis";

import { GREY, WHITE} from '../lib/colors';

class Bar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	hover: false
        }
    }

	render() {
		const { radius, y, bw, bh, color, label} = this.props;

		return (
			<g
				// onMouseEnter = { (e) => { this.setState({hover: true}) } }
    //             onMouseLeave = { (e) => { this.setState({hover: false}) } }
			>
				<path
					d={`M0,${y}
						h${bw - radius}
						a${radius},${radius} 0 0 1 ${radius},${radius}
						v${bh - radius}
						a${radius},${radius} 0 0 1 ${-radius},${radius}
						h${-bw + radius}Z
					`}
					fill 		 = { `${color}` }
					style        = { { transition: 'all 0.2s linear' }} 
                    
				/>
				<text 
					x 		= {radius} 
					y 		= {y + 2.5 * radius} 
					fill 	= {WHITE}
					fontSize = "12px"
					>{label}
				</text>
			</g>
		);
	}
};

class BarChart extends React.Component {

    render() {
    	const margin = { top: 0, right: 20, bottom: 30, left: 10 };
    	const { inputData, width, height, getX, getY, color, radius } = this.props;

		// Make sure w and h would be larger than or equal to 0
		const w = Math.max(0, width - margin.left - margin.right);
		const h = Math.max(0, height - margin.top - margin.bottom);

		const x = scaleLinear().rangeRound([0, w]);
		const y = scaleBand()
			.rangeRound([0, h])
			.padding(0.4);

		// const maxWidth = max(inputData, getX);			
		
		x.domain([0, max(inputData, getX)]);
		y.domain(inputData.map(getY));

		const axisX = axisBottom(x).ticks(0);
			//.tickFormat((d) => d === 0 ? 'Knowledgeable' : d === maxWidth ? 'Advanced' : '');

    	return ( <svg className='bar-chart' width={width} height={height}>
    				<g transform={`translate(${margin.left}, ${margin.top})`}>
						{inputData.map((item, i) => {
							const bw = x(getX(item));
							const bh = y.bandwidth();

							return <Bar
								key 	= {`${i}`}
								radius 	= {radius}
								y 		= {y(getY(item))}
								bw 		= {bw}
								bh 		= {bh}
								color 	= {color}
								label 	= {item.label}
							/>
						})}

						<g
							className="axis axis-x"
							transform={`translate(0, ${h})`}
							ref={node => {
								const axis = select(node).call(axisX);
								axis.selectAll(".tick line").remove();
							}}
						>
							<text 
								x 	= {41} 
								y 	= {18} 
								fill= {GREY}
								>Knowledgeable
							</text>
							<text 
								x 	= {w - 26} 
								y 	= {18} 
								fill= {GREY}
								>Advanced
							</text>
						</g>
					</g>
	    			<style>{`
				        .axis {
				          color: ${GREY};
				          font-size: 12px;
				        }
				      `}</style>
	    		 </svg> );
    }
}

export default BarChart;
