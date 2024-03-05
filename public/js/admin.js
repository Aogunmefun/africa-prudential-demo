const data = {
    labels: [
      'Eval Score',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [80, 30],
      backgroundColor: [
        'rgb(84,52,96)',
        'rgb(255, 255, 255)',
      ],
      hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
};
const myChart = new Chart(
    document.getElementById('first-eval-score'),
    config
);

const data1 = {
    labels: [
      'Avg Eval Score',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [82, 18],
      backgroundColor: [
        'rgb(84,52,96)',
        'rgb(255, 255, 255)',
      ],
      hoverOffset: 4
    }]
};

const config1 = {
    type: 'doughnut',
    data: data1,
};
const myChart1 = new Chart(
    document.getElementById('eval-time'),
    config1
);

const data2 = {
    labels: [
      'Avg Eval Score',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [63, 37],
      backgroundColor: [
        'rgb(84,52,96)',
        'rgb(255, 255, 255)',
      ],
      hoverOffset: 4
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
};
const myChart2 = new Chart(
    document.getElementById('avg-eval-score'),
    config2
);


const data3 = {
    labels: [
      'Avg Eval Score',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [44, 43],
      backgroundColor: [
        'rgb(84,52,96)',
        'rgb(255, 255, 255)',
      ],
      hoverOffset: 4
    }]
};

const config3 = {
    type: 'doughnut',
    data: data3,
};
const myChart3 = new Chart(
    document.getElementById('auto-reject'),
    config3
);