const revenueChart = document.getElementById("myChart");
const labels = [];
const data = {
    labels: labels,
    datasets: [{
      label: 'Revenue(Crores)',
      data:[],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
],
  };
const config = {
    type: 'line',
    data: data,
}

let chart = new Chart(revenueChart,config)

//   console.log("Chart");

  function charT() {
      chart.data.labels.push(chart.data.labels.length+1);

      chart.data.datasets[0].data.push(Math.random()*100);

      chart.update();

      
  }

  setInterval(charT,1000);