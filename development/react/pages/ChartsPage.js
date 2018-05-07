import React from 'react';

import Box from '../controls/Box.js';
import Graphic from '../controls/Graphic.js';

class ChartsPage extends React.Component
{
    render()
    {
        return(
            <section className="content">
				{/* ************* Charts (chartjs) ************* */}
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<Graphic type='line' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<Graphic type='bar' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<Graphic type='horizontalBar' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<Graphic type='radar' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<Graphic type='pie' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<Graphic type='doughnut' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<Graphic type='polarArea' data={this.createChartDataTest()} randColor></Graphic>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<Graphic type='bubble' data={this.createChartDataBubbles()} randColor></Graphic>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<Graphic type='scatter' data={this.createChartDataBubbles()} randColor></Graphic>
						</Box>
					</div>
				</div>

				{/* ************* Charts (react-chartjs) ************* */}
				{/* <div className="row">
					<div className="col-xs-6">
						<Box>
					<Line data={this.createData1()} width="450"></Line>
						</Box>
					</div>
					<div className="col-xs-6">
						<Box>
					<Bar data={this.createData2()} width="450"></Bar>
						</Box>
					</div>
					</div>
					<Radar data={this.createData2()} width="800" height="300"></Radar>
					<PolarArea data={this.createData3()} width="800" height="300"></PolarArea>
					<Pie data={this.createData3()} width="800" height="300"></Pie>
				<Doughnut data={this.createData3()} width="800" height="300"></Doughnut> */}
            </section>
        );
    }

	// ************* Charts (chartjs) ************* //
	rand(num=1, min=0, max=255)
	{
		var rtn = [];
		while (rtn.length < num)
		{
			rtn.push(Math.floor((Math.random() * (max - min)) + min));
		}
		return (num==1) ? rtn[0] : rtn;
	}

	randColor(num=1, alpha=0.4)
	{
		var rtn = [];
		while (rtn.length < num) {
			rtn.push(`rgba(${this.rand()},${this.rand()},${this.rand()}, ${alpha})`);
		}
		return (num==1) ? rtn[0] : rtn;
	}

	createChartDataTest()
	{
		var data =
		{
			//********************* Method one *********************//
			// labels: ["January", "February", "March", "April", "May", "June", "July"],
			// datasets:
			// [
			// 	{
			// 		data: this.rand(7, 32, 250),
			// 		// backgroundColor: this.randColor(7),
			// 		// label: ["title 1"]
			// 	},
			// 	{
			// 		data: this.rand(7, 32, 250),
			// 		// backgroundColor: this.randColor(7),
			// 		// label: ["title 2"]
			// 	}
			// ],
			//********************* Method two *********************//
			data: [this.rand(7, 32, 250), this.rand(7, 32, 250)],
			// backgroundColors: this.randColor(7),
			// titles: ["cosas", "cosas2", "cosas3"]
		};
		return data
	}

	createChartDataBubbles()
	{
		var data =
		{
			datasets:
			[
				{
		            label: 'Scatter Dataset',
		            data: [{
		                x: this.rand(),
		                y: this.rand(),
						r: this.rand(1, 10, 25)
		            }, {
						x: this.rand(),
		                y: this.rand(),
						r: this.rand(1, 10, 25)
		            }, {
						x: this.rand(),
		                y: this.rand(),
						r: this.rand(1, 10, 25)
		            }]
		        },
				{
		            label: 'Scatter Dataset',
		            data: [{
		                x: this.rand(),
		                y: this.rand(),
						r: this.rand(1, 10, 25)
		            }, {
						x: this.rand(),
		                y: this.rand(),
						r: this.rand(1, 10, 25)
		            }, {
						x: this.rand(),
		                y: this.rand(),
						r: this.rand(1, 10, 25)
		            }]
		        }
			]
		};
		return data;
	}

	createChartData1()
	{
		var data =
		{
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets:
			[
				{
					label: "My First dataset",
					backgroundColor: "rgba(220,0,0,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: this.rand(7, 32, 250)
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: this.rand(7, 32, 250)
				}
			]
		};
		return data;
	}

	createChartData2()
	{
		var data =
		{
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets:
			[
				{
			        data: this.rand(7, 32, 250),
					// backgroundColor: this.randColor(7)
			    },
				{
			        data: this.rand(9, 32, 250),
					// backgroundColor: this.randColor(9)
			    }
			]

		};
		return data;
	}

	//************* Charts (react-chartjs) *************//
	// rand(min, max, num)
	// {
	// 	var rtn = [];
	// 	while (rtn.length < num)
	// 	{
	// 		rtn.push(Math.floor((Math.random() * (max - min)) + min));
	// 	}
	// 	return rtn;
	// }
	//
	// createData1()
	// {
	// 	var data =
	// 	{
	// 		labels: ["January", "February", "March", "April", "May", "June", "July"],
	// 		datasets:
	// 		[
	// 			{
	// 				label: "My First dataset",
	// 				fillColor: "rgba(220,220,220,0.2)",
	// 				strokeColor: "rgba(220,220,220,1)",
	// 				pointColor: "rgba(220,220,220,1)",
	// 				pointStrokeColor: "#fff",
	// 				pointHighlightFill: "#fff",
	// 				pointHighlightStroke: "rgba(220,220,220,1)",
	// 				data: this.rand(32, 250, 7)
	// 			},
	// 			{
	// 				label: "My Second dataset",
	// 				fillColor: "rgba(151,187,205,0.2)",
	// 				strokeColor: "rgba(151,187,205,1)",
	// 				pointColor: "rgba(151,187,205,1)",
	// 				pointStrokeColor: "#fff",
	// 				pointHighlightFill: "#fff",
	// 				pointHighlightStroke: "rgba(151,187,205,1)",
	// 				data: this.rand(32, 250, 7)
	// 			}
	// 		]
	// 	};
	// 	return data;
	// }
	//
	// createData2()
	// {
	// 	var data =
	// 	{
	// 		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	// 		datasets: [
	// 			{
	// 				label: "My First dataset",
	// 				fillColor: "rgba(220,220,220,0.2)",
	// 				strokeColor: "rgba(220,220,220,1)",
	// 				pointColor: "rgba(220,220,220,1)",
	// 				pointStrokeColor: "#fff",
	// 				pointHighlightFill: "#fff",
	// 				pointHighlightStroke: "rgba(220,220,220,1)",
	// 				data: this.rand(32, 250, 7)
	// 			},
	// 			{
	// 				label: "My Second dataset",
	// 				fillColor: "rgba(151,187,205,0.2)",
	// 				strokeColor: "rgba(151,187,205,1)",
	// 				pointColor: "rgba(151,187,205,1)",
	// 				pointStrokeColor: "#fff",
	// 				pointHighlightFill: "#fff",
	// 				pointHighlightStroke: "rgba(151,187,205,1)",
	// 				data: this.rand(32, 250, 7)
	// 			}
	// 		]
	// 	};
	// 	return data;
	// }
	//
	// createData3()
	// {
	// 	var data = [
	// 		{
	// 			value: this.rand(32, 250, 1),
	// 			color:"#F7464A",
	// 			highlight: "#FF5A5E",
	// 			label: "Red"
	// 		},
	// 		{
	// 			value: this.rand(32, 250, 1),
	// 			color: "#46BFBD",
	// 			highlight: "#5AD3D1",
	// 			label: "Green"
	// 		},
	// 		{
	// 			value: this.rand(32, 250, 1),
	// 			color: "#FDB45C",
	// 			highlight: "#FFC870",
	// 			label: "Yellow"
	// 		},
	// 		{
	// 			value: this.rand(32, 250, 1),
	// 			color: "#949FB1",
	// 			highlight: "#A8B3C5",
	// 			label: "Grey"
	// 		},
	// 		{
	// 			value: this.rand(32, 250, 1),
	// 			color: "#4D5360",
	// 			highlight: "#616774",
	// 			label: "Dark Grey"
	// 		}
	// 	];
	// 	return data;
	// }
	//
	// createOpts1()
	// {
	// 	var option1 =
	// 	{
	// 		// scaleFontColor: "#fa0",
	// 	    // datasetStrokeWidth: 1,
	// 	    // scaleShowLabels : true,
	// 	    animation : false,
	// 	    // bezierCurve : true,
	// 	    // scaleStartValue: 0,
	//
	// 		// multiTooltipTemplate: "<%if (datasetLabel){%><%=label%><%}%>: <%= value %>",
	// 		// multiTooltipTemplate:
	// 		// "<ul class=\"<%=name.toLowerCase()%>-legend\">
	// 		// 	<% for (var i=0; i<datasets.length; i++){%>
	// 		// 		<li>
	// 		// 			<span style=\"background-color:<%=datasets[i].strokeColor%>\">
	// 		// 				<%if(datasets[i].label){%>
	// 		// 					<%=datasets[i].label%>
	// 		// 				<%}%>
	// 		// 			</span>
	// 		// 		</li>
	// 		// 	<%}%>
	// 		// </ul>",
	// 		// legendTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>"
	// 		// scaleLabel: "<%=value%>",
	// 		// scaleBeginAtZero: true,
	// 	};
	// }
}

module.exports = ChartsPage;
