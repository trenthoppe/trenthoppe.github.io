function Intellectual() {
  this.initDuolingoChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Fluent","Unlearned"],
            datasets: [{
                data: [41, 59],
                backgroundColor: [
                    'rgba(0,128,0, 0.2)',
                    'rgba(255,0,0, 0.2)'
                ],
                borderColor: [
                    'rgba(0,128,0,1)',
                    'rgba(255,0,0, 0.2)'
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
            labels: ["January"],
            datasets: [{
                label: 'Practiced Italian (% Days)',
                data: [74],
                backgroundColor: [
                    'rgba(145, 30, 180, 0.2)',
                ],
                borderColor: [
                    'rgba(145, 30, 180,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
