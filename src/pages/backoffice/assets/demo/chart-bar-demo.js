// import React, { useEffect } from 'react';
// import Chart from 'chart.js';

// function BarChart() {
//   useEffect(() => {
//     // Set new default font family and font color to mimic Bootstrap's default styling
//     Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
//     Chart.defaults.global.defaultFontColor = '#292b2c';

//     // Bar Chart Example
//     const ctx = document.getElementById("myBarChart");
//     const myBarChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [{
//           label: "Revenue",
//           backgroundColor: "rgba(2,117,216,1)",
//           borderColor: "rgba(2,117,216,1)",
//           data: [4215, 5312, 6251, 7841, 9821, 14984],
//         }],
//       },
//       options: {
//         scales: {
//           xAxes: [{
//             time: {
//               unit: 'month'
//             },
//             gridLines: {
//               display: false
//             },
//             ticks: {
//               maxTicksLimit: 6
//             }
//           }],
//           yAxes: [{
//             ticks: {
//               min: 0,
//               max: 15000,
//               maxTicksLimit: 5
//             },
//             gridLines: {
//               display: true
//             }
//           }],
//         },
//         legend: {
//           display: false
//         }
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <canvas id="myBarChart" width="400" height="200"></canvas>
//     </div>
//   );
// }

// export default BarChart;
