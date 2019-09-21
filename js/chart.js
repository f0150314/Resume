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
            marginRight: 40,
            backgroundColor: '#474747',
            borderColor: '#ffffff',
            borderWidth: 2
        },
        title: {
            text: '<b>Skill set</b>',
            style: {
                color: '#ffffff'
            }
        },
        subtitle: {
            text: 'Programming languages',
            style: {
                color: '#c9c9c9'
            }
        },
        xAxis: {
            categories: ['Python', 'C#', 'Visual Basic', 'HTML', 'CSS', 'Javascript', 
                        'TSQL', '.NET', 'ASP.NET', 'Xamarin', 'Jquery', 'Java'],
            title: {
                text: '<b>Skills</b>',
                style: {
                    color: '#ffffff'
                }
            },
            labels: {
                style: {
                    color: '#c9c9c9'
                }
            }
        },
        yAxis: {
            max: 100,
            min: 0,
            title: {
                text: '<b>Skill level</b>',
                align: 'high',
                style: {
                    color: '#ffffff'
                }
            },
            labels: {
                overflow: 'justify',
                style: {
                    color: '#c9c9c9'
                }
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
            data: [50, 85, 75, 70, 65, 70, 
                    75, 70, 65, 35, 75, 45]
        }]
    }
}