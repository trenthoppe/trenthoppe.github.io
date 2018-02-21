function Fitness() {
  this.labels = [];
  this.data = [];

  this.initWeightChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
            datasets: [{
                label: 'Body Weight',
                data: [160, 159, 158, 158, 158],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }]
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
                ticks: {
                    min: 155
                }
            }]
        }
        }
    });
  }

  this.initGymAttendanceChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January"],
            datasets: [{
                label: 'Visited Gym (% Days)',
                data: [55],
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

  this.initMaxChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February"],
            datasets: [{
                label: 'Hang Clean',
                data: [145, 150],
                backgroundColor: 'rgba(102, 102, 155, 0.2)',
                borderColor: 'rgba(102,102,255,1)',
                borderWidth: 2
            },{
                label: 'Bench',
                data: [180, 185],
                backgroundColor: 'rgba(255,165,0, 0.2)',
                borderColor: 'rgba(255,165,0,1)',
                borderWidth: 2
            },{
                label: 'Pull Up',
                data: [195, 200],
                backgroundColor:'rgba(0,0,255, 0.2)',
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 2
            },{
                label: 'Squat',
                data: [225, 235],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2
            },{
                label: 'Deadlift',
                data: [250, 265],
                backgroundColor:'rgba(0,255,255, 0.2)',
                borderColor: 'rgba(0,255,255,1)',
                borderWidth: 2
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
                ticks: {
                    min:140
                }
            }]
        }
    }
    });
  }
}
