function StrengthenRelationships() {

  this.initFamilyCallChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'January',
                data: [77],
                backgroundColor: [
                    'rgba(145, 30, 180, 0.2)',
                ],
                borderColor: [
                    'rgba(145, 30, 180, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'February',
                data: [93],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'March',
                data: [83],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'April',
                data: [87],
                backgroundColor: [
                    'rgba(255,165,0, .2)',
                ],
                borderColor: [
                    'rgba(255,165,0)',
                ],
                borderWidth: 1
            },{
                label: 'May',
                data: [95],
                backgroundColor: [
                    'rgba(255,0,0, .2)',
                ],
                borderColor: [
                    'rgba(255,0,0)',
                ],
                borderWidth: 1
            },{
                label: 'June',
                data: [99],
                backgroundColor: [
                    'rgba(189,183,107, .2)',
                ],
                borderColor: [
                    'rgba(189,183,107)',
                ],
                borderWidth: 1
            },{
                label: 'July',
                data: [99],
                backgroundColor: [
                    'rgba(64,224,208, .2)',
                ],
                borderColor: [
                    'rgba(64,224,208)',
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Called Family (% days)'
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
