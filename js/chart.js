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
                    text: '<strong>Skill set</strong>',
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
                        text: '<strong>Skills</strong>',
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
                        text: '<strong>Skill level</strong>',
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
                    name: '<strong>Level</strong>',
                    data: [50, 85, 75, 70, 65, 70, 
                            75, 70, 60, 35, 75, 45]
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
                                return '<div style="width: 100%; text-align: center;">' +
                                            '<span style="font-size: 1.2em; color: ' + '#c9c9c9' + '; font-weight: bold;">' + this.point.series.name + '</span><br/>' + 
                                            '<span style="font-size: 2em; color: ' + Highcharts.getOptions().colors[4] + '; font-weight: bold;">' + this.y + '%</span>' + 
                                        '</div>';
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
                                return '<div style="width: 100%; text-align: center;">' + 
                                            '<span style="font-size: 1.2em; color: ' + '#c9c9c9' + '; font-weight: bold;">' + this.point.series.name + '</span><br/>' +
                                            '<span style="font-size: 2em; color: ' + Highcharts.getOptions().colors[4] + '; font-weight: bold;">' + this.y + '%</span>' +
                                        '</div>';
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
                        y: 95
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
                    marginTop: -10
                },
                title: {
                    text: '<strong>Development tools</strong>',
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
                        innerSize: 50,
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
                    dataLabels: {
                        format: '<div style="width: 100%; text-align: center;">' + 
                                    '<span style="color: {point.color}; font-weight: bold;">{point.name}</span><br>' + 
                                    '<span style="color: {point.color};">{point.y} %</span>' + 
                                '</div>'
                    },
                    name: '<strong>Usage</strong>',
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
        case 'Career':
            chartOption = {
                chart: {
                    type: 'timeline',
                    renderTo: $('#divCareerChart')[0],
                    backgroundColor: '#474747',
                },
                xAxis: {
                    visible: false,
                },
                yAxis: {
                    visible: false
                },
                title: {
                    text: '<strong>Education & Employment<strong>',
                    style: {
                        color: '#ffffff'
                    }
                },
                subtitle: {
                    text: 'Achievements acquired in University (click timeline)',
                    style: {
                        color: '#c9c9c9'
                    }
                },
                credits: {
                    enabled: false
                },
                colors: [
                    '#4185F3',
                    '#427CDD',
                    '#406AB2',
                    '#3E5A8E',
                    '#3B4A68',
                    '#363C46'
                ],
                series: [{
                    dataLabels: {
                        allowOverlap: false,
                        style: {
                            fontSize: 10
                        }
                    },
                    data: [{
                        name: '<em>2008 - 2012</em>',
                        label: '<strong>Shih Hsin University (Taiwan):</strong><br>Batchlor of Communication Management',
                        description: '<strong>Honours & Awards:</strong><br>None'
                    }, {
                        name: '<em>2013 - 2014</em>',
                        label: '<strong>Dashi Junior High School (Taiwan):</strong><br>Mathematics Teacher',
                        description: '<strong>Honours & Awards:</strong><br>None'
                    }, {
                        name: '<em>2015 - 2016</em>',
                        label: '<strong>Sushi Train (Australia):</strong><br>Waiter',
                        description: '<strong>Honours & Awards:</strong><br>None'
                    },{
                        name: '<em>2017 - 2018</em>',
                        label: '<strong>Queensland University of Technology (Australia):</strong><br>Master of IT (GPA: 6.3/7)',
                        description: '<strong>Honours & Awards:</strong>' + 
                                        '<br>Member of Golden Key International Student Society - Sep 2018 ~ current' + 
                                        '<br>Dean\'s list - Semester 1, 2018' + 
                                        '<br>Dean\'s list - Semester 2, 2017'
                    }, {
                        name: '<em>2019 - Current</em>',
                        label: '<strong>Tyeware (Australia):</strong><br>ASP.NET developer',
                        description: '<strong>Honours & Awards:</strong><br>None'
                    }]
                }]
            }
            break;
    }
    return chartOption;
}