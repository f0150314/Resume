function renderChart(chartType) {
    var chart = null,
        chartOptions = null;

    // Create chart option 
    chartOptions = createChartOptions(chartType);

    // Render chart
    chart = new Highcharts.chart(chartOptions);
}

function createChartOptions(chartType) {
    var chartOption = null;
    
    switch (chartType) {
        case 'Skill':
            chartOption = {
                chart: {
                    renderTo: $('#divSkillChart')[0],
                    type: 'bar',
                    marginRight: 40,
                    backgroundColor: '#474747'
                    // borderColor: '#ffffff',
                    // borderWidth: 2
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
            };
            break;
        case 'English':
            chartOption = {
                chart: {
                    type: 'solidgauge',
                    backgroundColor: '#474747',
                    marginLeft: 20,
                    renderTo: $('#divEnglishChart')[0]
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                tooltip: {
                    enabled: false
                },
                pane: {
                    startAngle: 0,
                    endAngle: 360,
                    background: [{
                        outerRadius: '118%',
                        innerRadius: '88%',
                        backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.3)
                            .get(),
                        borderWidth: 0
                    }]
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickPositions: []
                },
                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            enabled: true,
                            y: -30,
                            borderWidth: 0,
                            backgroundColor: 'none',
                            useHTML: true,
                            shadow: false,
                            style: {
                                fontSize: '10px'
                            },
                            formatter: function() {
                                return '<div style="width: 100%; text-align: center;">\
                                            <span style="font-size: 1.2em; color: ' + '#c9c9c9' + '; font-weight: bold;">' + this.point.series.name + '</span><br/>\
                                            <span style="font-size: 2em; color: ' + Highcharts.getOptions().colors[4] + '; font-weight: bold;">' + Highcharts.numberFormat(this.y, 0) + '%</span>\
                                        </div>';
                            }
                        },
                        linecap: 'round',
                        rounded: true
                    }
                },
                series: [{
                    name: 'English',
                    data: [{
                        color: Highcharts.getOptions().colors[0],
                        radius: '118%',
                        innerRadius: '88%',
                        y: 83
                    }]
                }]
            };
            break; 
        case 'Chinese':
            chartOption = {
                chart: {
                    type: 'solidgauge',
                    backgroundColor: '#474747',
                    marginRight: 20,
                    renderTo: $('#divChineseChart')[0]
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                tooltip: {
                    enabled: false
                },
                pane: {
                    startAngle: 0,
                    endAngle: 360,
                    background: [{
                        outerRadius: '118%',
                        innerRadius: '88%',
                        backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.3)
                            .get(),
                        borderWidth: 0
                    }]
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickPositions: []
                },
                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            enabled: true,
                            y: -30,
                            borderWidth: 0,
                            backgroundColor: 'none',
                            useHTML: true,
                            shadow: false,
                            style: {
                                fontSize: '10px'
                            },
                            formatter: function() {
                                return '<div style="width: 100%; text-align: center;">\
                                            <span style="font-size: 1.2em; color: ' + '#c9c9c9' + '; font-weight: bold;">' + this.point.series.name + '</span><br/>\
                                            <span style="font-size: 2em; color: ' + Highcharts.getOptions().colors[4] + '; font-weight: bold;">' + Highcharts.numberFormat(this.y, 0) + '%</span>\
                                        </div>';
                            }
                        },
                        linecap: 'round',
                        rounded: true
                    }
                },
                series: [{
                    name: 'Chinese',
                    data: [{
                        color: Highcharts.getOptions().colors[0],
                        radius: '118%',
                        innerRadius: '88%',
                        y: 100
                    }]
                }]
            };
            break;   
    }
    return chartOption;
}