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
            "Week 31", "Week 32", "Week 33", "Week 34", "Week 35", "Week 36", "Week 37", "Week 38", "Week 39", "Week 40",
            "Week 41", "Week 42", "Week 43", "Week 44", "Week 45", "Week 46", "Week 47", "Week 48", "Week 49", "Week 50",
            "Week 51", "Week 52"],
            datasets: [{
                label: 'Body Weight',
                data: [160, 159, 158, 158, 158, 157, 158.8, 156.5, 157, 158,
                  159.5, 159, 158.5, 158, 159, 161, 160, 160.2, 160, 159.5,
                  159, 160, 161, 162, 162.5, 162, 163, 164, 164.5, 162.5,
                  161.5, 160.5, 160, 159.5, 160, 161, 160.5, 160, 160.5, 159.5,
                  160.5, 162, 163, 161, 160, 159, 164, 163, 163.5, 164, 165, 164
                ],
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
            },{
                label: 'September',
                data: [33],
                backgroundColor: [
                    'rgba(255, 69, 0, .2)',
                ],
                borderColor: [
                    'rgba(255, 69, 0)',
                ],
                borderWidth: 1
            },{
                label: 'October',
                data: [48],
                backgroundColor: [
                    'rgba(13, 152, 186, .2)',
                ],
                borderColor: [
                    'rgba(13, 152, 186)',
                ],
                borderWidth: 1
            },{
                label: 'November',
                data: [47],
                backgroundColor: [
                    'rgba(192, 192, 192, .2)',
                ],
                borderColor: [
                    'rgba(192, 192, 192)',
                ],
                borderWidth: 1
            },{
                label: 'December',
                data: [34],
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Hang Clean',
                data: [125, 130, 132.5, 135, 135, 145, 150, 145, 150, 152.5, 155, 165],
                backgroundColor: 'rgba(102, 102, 155, 0.2)',
                borderColor: 'rgba(102,102,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Bench',
                data: [180, 185, 190, 190, 185, 180, 185, 190, 190, 185, 185, 200],
                backgroundColor: 'rgba(255,165,0, 0.2)',
                borderColor: 'rgba(255,165,0,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Pull Up',
                data: [195, 200, 200, 205, 200, 205, 215, 220, 215, 220, 220, 230],
                backgroundColor:'rgba(0,0,255, 0.2)',
                borderColor: 'rgba(0,0,255,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Squat',
                data: [225, 235, 240, 240, 235, 235, 240, 245, 240, 240, 240, 250],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
                borderWidth: 3
            },{
                label: 'Deadlift',
                data: [250, 265, 270, 270, 270, 265, 300, 310, 310, 300, 300, 310],
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
                    min:120
                }
            }]
        }
    }
    });
  }
}
