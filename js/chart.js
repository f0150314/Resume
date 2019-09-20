function renderSkillChart() {
    var skillChart = null,
        chartOptions = null;

    chartOptions = createChartOptions();

    //Render chart
    skillChart = new Highcharts.chart(chartOptions);
}

function createChartOptions() {
    return {
        chart: {
            renderTo: $('#divSkillChart')[0],
            type: 'bar',
            marginRight: 50
        },
        title: {
            text: 'Skill set'
        },
        subtitle: {
            text: 'Programming languages'
        },
        xAxis: {
            categories: ['Python', 'C#', 'Visual Basic', 
                        'HTML', 'CSS', 'Javascript', 'TSQL',
                        '.NET', 'ASP.NET', 'Xamarin', 'Jquery'],
            title: {
                text: '<b>Skills</b>'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '<b>Skill level</b>',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '<b>Level</b>',
            data: [70, 31, 63, 20, 21, 30, 
                    40, 90, 80, 36, 78]
        }]
    }
}