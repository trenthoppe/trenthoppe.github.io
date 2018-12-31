function StrechData() {
  this.hamstringData = {
        type: 'line',
        data: {
            labels: TimeLabels.weeks,
            datasets: [{
                label: 'Body Weight',
                data: [160, 159, 158, 158, 158, 157, 158.8, 156.5, 157, 158,
                  159.5, 159, 158.5, 158, 159, 161, 160, 160.2, 160, 159.5,
                  159, 160, 161, 162, 162.5, 162, 163, 164, 164.5, 162.5,
                  161.5, 160.5, 160, 159.5, 160, 161, 160.5, 160, 160.5, 159.5,
                  160.5, 162, 163, 161, 160, 159, 164, 163
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
      };

  this.upperBodyData = {
    labels: TimeLabels.weeks,
    datasets: []
  };

  this.lateralSideAndLowerBackData = {
    labels: TimeLabels.weeks,
    datasets: []
  };
}
