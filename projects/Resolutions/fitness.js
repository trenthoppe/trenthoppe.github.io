function Fitness() {
  this.labels = [];
  this.data = [];

  this.initWeightChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16", "Week 17", "Week 18"],
            datasets: [{
                label: 'Body Weight',
                data: [160, 159, 158, 158, 158, 157, 158.8, 156.5, 157, 158, 159.5, 159, 158.5, 158, 159, 161, 160, 160.2],
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
            datasets: [{
                label: 'January',
                data: [55],
                backgroundColor: [
                    'rgba(145, 30, 180, 0.2)',
                ],
                borderColor: [
                    'rgba(145, 30, 180, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'February',
                data: [42],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                ],
                borderWidth: 1
            },{
                label: 'March',
                data: [43.3],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
                ],
                borderWidth: 1
            },{
                label: 'April',
                data: [43.3],
                backgroundColor: [
                    'rgba(255,165,0, .2)',
                ],
                borderColor: [
                    'rgba(255,165,0)',
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Visited Gym (% days)'
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

  this.initMaxChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Hang Clean',
                data: [145, 150, 152.5, 152.5],
                backgroundColor: 'rgba(102, 102, 155, 0.2)',
                borderColor: 'rgba(102,102,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Bench',
                data: [180, 185, 190, 190],
                backgroundColor: 'rgba(255,165,0, 0.2)',
                borderColor: 'rgba(255,165,0,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Pull Up',
                data: [195, 200, 200, 205],
                backgroundColor:'rgba(0,0,255, 0.2)',
                borderColor: 'rgba(0,0,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Squat',
                data: [225, 235, 240, 240],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Deadlift',
                data: [250, 265, 270, 270],
                backgroundColor:'rgba(0,255,255, 0.2)',
                borderColor: 'rgba(0,255,255,1)',
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
                ticks: {
                    min:140
                }
            }]
        }
    }
    });
  }
}
