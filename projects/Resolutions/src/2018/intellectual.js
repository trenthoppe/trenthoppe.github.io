function Intellectual() {
  this.initDuolingoChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Fluent (Jan)", "Fluent (Feb)", "Fluent (Mar)", "Unlearned"],
            datasets: [{
                data: [48, 8, 5, 49],
                backgroundColor: [
                    'rgba(145, 30, 180, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(145, 30, 180, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          maintainAspectRatio: false
        }
      });
  }

  this.initExpCrownChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Experience',
                data: [5500, 7200, 9565, 11285, 12385, 14845, 15900, 17000, 18815],
                yAxisID: 'Exp',
                backgroundColor: 'rgba(102, 102, 155, 0.2)',
                borderColor: 'rgba(102,102,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Crowns',
                data: [53, 72, 89, 94, 102, 118, 123, 127, 141],
                yAxisID: 'Crown',
                backgroundColor: 'rgba(255,165,0, 0.2)',
                borderColor: 'rgba(255,165,0,1)',
                fill: false,
                borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            mode: 'index',
          },
          hover: {
            mode: 'index'
          },
          scales: {
            yAxes: [{
              id: 'Crown',
              type: 'linear',
              position: 'right',
              ticks: {
                min: 50
              }
            }, {
              id: 'Exp',
              type: 'linear',
              position: 'left',
              ticks: {
                min: 5400
              }
            }]
        }
    }
    });
  }

  this.initItalianPracticeChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'January',
                data: [74],
                backgroundColor: [
                    'rgba(145, 30, 180, 0.2)',
                ],
                borderColor: [
                    'rgba(145, 30, 180,1)',
                ],
                borderWidth: 1
            },{
                label: 'February',
                data: [79],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                ],
                borderWidth: 1
            },{
                label: 'March',
                data: [74],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
                ],
                borderWidth: 1
            },{
                label: 'April',
                data: [84],
                backgroundColor: [
                    'rgba(255,165,0, .2)',
                ],
                borderColor: [
                    'rgba(255,165,0)',
                ],
                borderWidth: 1
            },{
                label: 'May',
                data: [85],
                backgroundColor: [
                    'rgba(255,0,0, .2)',
                ],
                borderColor: [
                    'rgba(255,0,0)',
                ],
                borderWidth: 1
            },{
                label: 'June',
                data: [90],
                backgroundColor: [
                    'rgba(189,183,107, .2)',
                ],
                borderColor: [
                    'rgba(189,183,107)',
                ],
                borderWidth: 1
            },{
                label: 'July',
                data: [90],
                backgroundColor: [
                    'rgba(64,224,208, .2)',
                ],
                borderColor: [
                    'rgba(64,224,208)',
                ],
                borderWidth: 1
            },{
                label: 'August',
                data: [71],
                backgroundColor: [
                    'rgba(199, 21, 133, .2)',
                ],
                borderColor: [
                    'rgba(199, 21, 133)',
                ],
                borderWidth: 1
            },{
                label: 'September',
                data: [73],
                backgroundColor: [
                    'rgba(255, 69, 0, .2)',
                ],
                borderColor: [
                    'rgba(255, 69, 0)',
                ],
                borderWidth: 1
            },{
                label: 'October',
                data: [83],
                backgroundColor: [
                    'rgba(13, 152, 186, .2)',
                ],
                borderColor: [
                    'rgba(13, 152, 186)',
                ],
                borderWidth: 1
            },{
                label: 'November',
                data: [73],
                backgroundColor: [
                    'rgba(192, 192, 192, .2)',
                ],
                borderColor: [
                    'rgba(192, 192, 192)',
                ],
                borderWidth: 1
            }, {
                label: 'December',
                data: [84],
                backgroundColor: [
                    'rgba(255,192,203, .2)',
                ],
                borderColor: [
                    'rgba(255,192,203)',
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Practiced Italian (% days)'
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
    });
  }
}
