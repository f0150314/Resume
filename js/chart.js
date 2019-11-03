'use strict';

function renderChart(chartType) {
    var chart = null,
        chartOptions = null;

    // Create chart option 
    chartOptions = createChartOptions(chartType);

    // Render chart
    chart = new Highcharts.chart(chartOptions);
}

function createChartOptions(chartType) {
    // Common chart attributes
    var chartOption,
        chartContainer,
        chartActualType,
        chartBackgroundColor = '#474747',
        chartMarginRight,
        chartMarginLeft,
        chartMarginTop,
        titleText = '',
        titleTextColor = '#ffffff',
        subtitleText = '',
        subtitleTextColor = '#c9c9c9',
        seriesData;

    // Set attributes of general chartOption 
    switch (chartType) {
        case 'Skill':
            chartContainer = $('#divSkillChart')[0];
            chartActualType = 'bar';
            chartMarginRight = 40;
            titleText = '<strong>Skill set</strong>';
            subtitleText = 'Programming languages';
            seriesData = [{
                name: '<strong>Level</strong>',
                data: [70, 75, 70, 70, 60, 75, 
                        75, 70, 50, 20, 70, 20]
            }];
            break;
        case 'Tool':
            chartContainer = $('#divToolChart')[0];
            chartActualType = 'pie';
            chartMarginTop = -10;
            titleText = '<strong>Development tools</strong>';
            subtitleText = 'Softwares';
            seriesData = [{
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
                    ['SQL server', 19]
                ]
            }];
            break;
        case 'Career':
            chartContainer = $('#divCareerChart')[0];
            chartActualType = 'timeline';
            titleText = '<strong>Education & Employment<strong>'
            subtitleText = 'Achievements acquired in University (click timeline)';
            seriesData = [{
                dataLabels: {
                    allowOverlap: false,
                    style: {
                        fontSize: 10
                    }
                },
                data: [{
                    name: '<em>2008 - 2012</em>',
                    label: '<strong>Shih Hsin University:</strong><br>Bachlor of Communication Management',
                    description: '<strong>Honours & Awards:</strong><br>None'
                }, {
                    name: '<em>2013 - 2014</em>',
                    label: '<strong>Dashi Junior High School:</strong><br>Mathematics Teacher',
                    description: '<strong>Honours & Awards:</strong><br>None'
                }, {
                    name: '<em>2015 - 2016</em>',
                    label: '<strong>Sushi Train:</strong><br>Waiter',
                    description: '<strong>Honours & Awards:</strong><br>None'
                },{
                    name: '<em>2017 - 2018</em>',
                    label: '<strong>Queensland University of Technology:</strong><br>Master of IT (GPA: 6.3/7)',
                    description: '<strong>Honours & Awards:</strong>' + 
                                    '<br>Member of Golden Key International Student Society - Sep 2018 ~ current' + 
                                    '<br>Dean\'s list - Semester 1, 2018' + 
                                    '<br>Dean\'s list - Semester 2, 2017'
                }, {
                    name: '<em>2019 - Current</em>',
                    label: '<strong>Tyeware:</strong><br>Web developer',
                    description: '<strong>Honours & Awards:</strong><br>None'
                }]
            }];
            break;
        case 'English':
        case 'Chinese':
            chartActualType = 'solidgauge';

            if (chartType == 'English') {
                chartContainer = $('#divEnglishChart')[0];
                chartMarginLeft = 20;
                seriesData = [{
                    name: 'English',
                    data: [{
                        color: Highcharts.getOptions().colors[0],
                        radius: '118%',
                        innerRadius: '88%',
                        y: 83
                    }]
                }];
            } else {
                chartContainer = $('#divChineseChart')[0];
                chartMarginRight = 20;
                seriesData = [{
                    name: 'Chinese',
                    data: [{
                        color: Highcharts.getOptions().colors[0],
                        radius: '118%',
                        innerRadius: '88%',
                        y: 95
                    }]
                }];
            }
            break;
    }
    
    // Add attributes to chartOption
    chartOption = {
        chart: {
            renderTo: chartContainer,
            type: chartActualType,
            backgroundColor: chartBackgroundColor,
            marginRight: chartMarginRight,
            marginLeft: chartMarginLeft,
            marginTop: chartMarginTop
        },
        title: {
            text: titleText,
            style: {
                color: titleTextColor
            }
        },
        subtitle: {
            text: subtitleText,
            style: {
                color: subtitleTextColor
            }
        },
        credits: {
            enabled: false
        },
        series: seriesData
    }

    // Add chart-specific attributes to different charts
    switch (chartType) {
        case 'Skill':
            chartOption.xAxis = {
                categories: ['Python', 'C#', 'Visual Basic', 'HTML', 'CSS', 'Javascript', 
                            'TSQL', '.NET', 'ASP.NET', 'Xamarin', 'Jquery', 'Java'],
                title: {
                    text: '<strong>Skills</strong>',
                    style: {
                        color: titleTextColor
                    }
                },
                labels: {
                    style: {
                        color: subtitleTextColor
                    }
                }
            };
            chartOption.yAxis = {
                min: 0,
                max: 100,
                title: {
                    text: '<strong>Skill level</strong>',
                    align: 'high',
                    style: {
                        color: titleTextColor
                    }
                },
                labels: {
                    overflow: 'justify',
                    style: {
                        color: subtitleTextColor
                    }
                }
            };
            chartOption.tooltip = {
                valueSuffix: ' %'
            };
            chartOption.plotOptions = {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            };
            chartOption.legend = {
                enabled: false
            };
            break;
        case 'Tool':
            chartOption.chart.options3d = {
                enabled: true,
                alpha: 45
            };
            chartOption.tooltip = {
                valueSuffix: ' %'
            };
            chartOption.plotOptions = {
                pie: {
                    allowPointSelect: true,
                    innerSize: 50,
                    depth: 45,
                    dataLabels: {
                        style: {
                            color: subtitleTextColor
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
            };
            break;
        case 'Career':
            chartOption.xAxis = {
                visible: false
            };
            chartOption.yAxis = {
                visible: false
            };
            chartOption.colors = [
                '#4185F3',
                '#427CDD',
                '#406AB2',
                '#3E5A8E',
                '#3B4A68',
                '#363C46'
            ];
            break;
        case 'English':
        case 'Chinese':
            chartOption.tooltip = {
                enabled: false
            };
            chartOption.pane = {
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
            };
            chartOption.yAxis = {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            };
            chartOption.plotOptions = {
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
            };
            break;
    }
    return chartOption;   
}