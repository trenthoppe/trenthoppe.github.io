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
