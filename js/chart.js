function renderChart(chartType) {
    var chart = null,
        chartOptions = null;

    // Create chart option 
    chartOptions = createChartOptions(chartType);

    if (Highcharts.chart[0]) {
        Highcharts.chart[0].destroy();
    }

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
                            useHTML: true,
                            formatter: function() {
                                return '<div style="width: 100%; text-align: center;">\
                                            <span style="font-size: 1.2em; color: ' + '#c9c9c9' + '; font-weight: bold;">' + this.point.series.name + '</span><br/>\
                                            <span style="font-size: 2em; color: ' + Highcharts.getOptions().colors[4] + '; font-weight: bold;">' + this.y + '%</span>\
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
                            useHTML: true,
                            formatter: function() {
                                return '<div style="width: 100%; text-align: center;">\
                                            <span style="font-size: 1.2em; color: ' + '#c9c9c9' + '; font-weight: bold;">' + this.point.series.name + '</span><br/>\
                                            <span style="font-size: 2em; color: ' + Highcharts.getOptions().colors[4] + '; font-weight: bold;">' + this.y + '%</span>\
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
        case 'Tool':
            chartOption = {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    },
                    renderTo: $('#divToolChart')[0],
                    backgroundColor: '#474747',
                },
                title: {
                    text: '<b>Development tools</b>',
                    style: {
                        color: '#ffffff'
                    }
                },
                subtitle: {
                    text: 'Software & Approach',
                    style: {
                        color: '#c9c9c9'
                    }
                },
                tooltip: {
                    valueSuffix: ' %'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        innerSize: 80,
                        depth: 45,
                        dataLabels: {
                            style: {
                                color: '#c9c9c9'
                            },
                            useHTML: true
                        },
                        colors: [
                            Highcharts.getOptions().colors[9],
                            Highcharts.getOptions().colors[7],
                            Highcharts.getOptions().colors[2],
                            Highcharts.getOptions().colors[6],
                            Highcharts.getOptions().colors[3],
                            Highcharts.getOptions().colors[8],
                            Highcharts.getOptions().colors[4],
                            Highcharts.getOptions().colors[0]
                        ]
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: '<b>Usage</b>',
                    data: [
                        ['GitHub', 5],
                        ['Bitbucket', 12],
                        ['Git', 13],
                        ['Sourcetree', 12],
                        ['Visual Studio', 22],
                        ['Atlassian', 12],
                        ['TFS', 6],
                        ['SQL server', 19],
                    ]
                }]
            }
            break;
    }
    return chartOption;
}