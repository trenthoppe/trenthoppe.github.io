function Fitness() {
  this.labels = [];
  this.data = [];

  this.initWeightChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10",
            "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16", "Week 17", "Week 18", "Week 19", "Week 20",
            "Week 21", "Week 22", "Week 23", "Week 24", "Week 25", "Week 26", "Week 27", "Week 28", "Week 29", "Week 30",
            "Week 31", "Week 32", "Week 33", "Week 34"],
            datasets: [{
                label: 'Body Weight',
                data: [160, 159, 158, 158, 158, 157, 158.8, 156.5, 157, 158,
                  159.5, 159, 158.5, 158, 159, 161, 160, 160.2, 160, 159.5,
                  159, 160, 161, 162, 162.5, 162, 163, 164, 164.5, 162.5,
                  161.5, 160.5, 160, 159.5],
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
            },{
                label: 'May',
                data: [40],
                backgroundColor: [
                    'rgba(255,0,0, .2)',
                ],
                borderColor: [
                    'rgba(255,0,0)',
                ],
                borderWidth: 1
            },{
                label: 'June',
                data: [46.7],
                backgroundColor: [
                    'rgba(189,183,107, .2)',
                ],
                borderColor: [
                    'rgba(189,183,107)',
                ],
                borderWidth: 1
            },{
                label: 'July',
                data: [40],
                backgroundColor: [
                    'rgba(64,224,208, .2)',
                ],
                borderColor: [
                    'rgba(164,224,208)',
                ],
                borderWidth: 1
            },{
                label: 'August',
                data: [33],
                backgroundColor: [
                    'rgba(199, 21, 133, .2)',
                ],
                borderColor: [
                    'rgba(199, 21, 133)',
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [{
                label: 'Hang Clean',
                data: [145, 150, 152.5, 152.5, 150, 150, 150, 150],
                backgroundColor: 'rgba(102, 102, 155, 0.2)',
                borderColor: 'rgba(102,102,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Bench',
                data: [180, 185, 190, 190, 185, 180, 185, 190],
                backgroundColor: 'rgba(255,165,0, 0.2)',
                borderColor: 'rgba(255,165,0,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Pull Up',
                data: [195, 200, 200, 205, 200, 205, 215, 220],
                backgroundColor:'rgba(0,0,255, 0.2)',
                borderColor: 'rgba(0,0,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Squat',
                data: [225, 235, 240, 240, 235, 235, 240, 245],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Deadlift',
                data: [250, 265, 270, 270, 270, 265, 300, 310],
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
