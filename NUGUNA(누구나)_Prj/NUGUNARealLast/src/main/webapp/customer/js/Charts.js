/**
 * 
 */


const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, -10000, 5002, 19242, 20000, 30000, 45000],
  }]
};

const config = {
  	type: 'line',
 	 data: data,
 	options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );