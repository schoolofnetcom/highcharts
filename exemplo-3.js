const options = {
    chart: {
        type: 'pie',
        renderTo: document.getElementById('chart')
    },
    title: {
        text: "Meu primeiro gráfico"
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            showInLegend: true
        }
    },
    series: [{
        name: "Idades",
        data: [
            { name: "Erik", y: 33, sliced: true, selected: true },
            { name: "João", y: 27 },
            { name: "Manuel", y: 22 },
            { name: "Maria", y: 23 },
            { name: "Matheus", y: 37 },
        ]
    }]
};

new Highcharts.Chart(options);
