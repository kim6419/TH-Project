
const label = [['2021.11.15','2021.11.22','2021.11.28','2021.12.05','2021.12.18','2021.12.22',],
				['2021.02.22','2021.04.22','2021.06.22','2021.08.22','2021.12.22','2021.12.22',],
				['2000.11.11','2005.11.11','2010.11.11','2015.11.11','2020.11.11','2021.12.22',]];
const values = [ [0, -10000, 5002, 19242, 20000, 30000],
				 [0, 10000, -5002, -19242, 8000, 42300],
				 [0, -10000, 54322, -43242, -15000, 24733]];
const nameValue =['뉴 욕쟁이 디저트', 'Alohaiz', 'Wadiz'];


const data = {
  labels: label[0],
  datasets: [{
    label: nameValue[0],
    backgroundColor: '',
    borderColor: 'rgb(255, 99, 132)',
    data: values[0],
  }]
};

const config = {
  	type: 'line',
 	 data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

$(document).ready(function(){
	
	var current = 0;
	$('#StatusList a').on('click', function(){
		if($(this).text().includes('뉴 욕쟁이')){
			current = 0;
		} else if($(this).text()=='Alohaiz'){
			current = 1;
		} else if($(this).text()=='Wadiz'){
			current = 2;
		}
		
		// 차트 변경 
		data.labels =label[current];
		data.datasets[0].data = values[current];
		data.datasets[0].label =nameValue[current];
		config.data = data;
		myChart.update();
			
		
	});
		
})