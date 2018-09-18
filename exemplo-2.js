const title = document.getElementsByTagName('title')[0].innerText;

const options = {
    chart: {
        type: 'bar',
        renderTo: document.getElementById('chart')
    },
    title: {
        text: title
    },
    xAxis: {
        title: {
            text: 'Dias'
        },
        minRange: 1
    },
    yAxis: {
        title: {
            text: 'Quantidade'
        }
    },
};

Highcharts.setOptions({
    lang: {
        downloadPDF: "Baixar para PDF"
    }
});

const chart = new Highcharts.Chart(options);

fetch('http://localhost:8000/api/v1/vendas.json')
    .then((res) => {
        return res.json()
    })
    .then(result => {
        const meses = [];
        for (let i = 0; i < result.data.length; i++) {
            if (meses.indexOf(result.data[i].mes) == -1) {
                meses.push(result.data[i].mes);
            }
        }

        for (let j = 0; j < meses.length; j++) {
            const data = [];

            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].mes != meses[j]) {
                    continue;
                }
                data.push({
                    name: "Dia " + result.data[i].dia,
                    y: result.data[i].quantidade,
                    x: result.data[i].dia
                });
            }

            chart.addSeries({ name: meses[j], data: data });
        }
    });
