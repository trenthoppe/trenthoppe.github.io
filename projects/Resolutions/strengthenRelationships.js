function StrengthenRelationships() {

  this.initFamilyCallChart = function(ctx) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January"],
            datasets: [{
                label: 'Called Family (% Days)',
                data: [77],
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
