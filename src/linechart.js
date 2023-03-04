import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    
    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Performance vs Time',
          data: [5, 7, 8, 6, 9, 10],
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Performance'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default LineChart;