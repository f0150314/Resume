"use strict";

var divNavColArray = [],
    divContentArray = [],
    chartNames = [];

function init() {
    // Populate div arrays
    $('.divHover').each(function () {
        divNavColArray.push($(this));
    });

    $('.divContentBody').each(function () {
        divContentArray.push($(this));
    });

    // Populate chartName array
    chartNames.push('Skill', 'English', 'Chinese', 'Tool', 'Career');
    
    // Initialize body content, hover behavior and charts
    showContent('ABOUT');
    divNavColArray[0].removeClass('divSelected');

    // Initialize navigation bar and images
    resizeNavbar();
    resizeImages();

    // Build up HTML for characteristic tables
    createMarkUpWithHTML();

    // Build up HTML for profolios
    createMarkUpWithHTML(myProfolioArray);   

    // Initialize Minesweeper
    libMinesweeper.init();
}

function showContent(category) {
    var focusDiv = null,
        hoverClass = 'divHover',
        selectedClass = 'divSelected';

    // Close sidebar if it is open after clicking item
    if ($("#divSidebar").width() > 0) {
        closeSidebar();
    }

    // Add hover behavior and remove selected behavior for all navigation columns
    for (var i = 0; i < divNavColArray.length; i++) {
        if (!divNavColArray[i].hasClass(hoverClass)) {
            divNavColArray[i].addClass(hoverClass);
        }

        if (divNavColArray[i].hasClass(selectedClass)) {
            divNavColArray[i].removeClass(selectedClass);
        }
    }

    // Hide all contents
    for (var i = 0; i < divContentArray.length; i++) {
        divContentArray[i].hide();
    }

    // Show selected contents and remove hover behavior
    switch (category) {
        case 'ABOUT':
            divNavColArray[0].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[0].show();
            focusDiv = $('#divAboutMe');
            break;
        case 'EDUCATION':    
        case 'CAREER': 
            divContentArray[0].show();
            focusDiv = $('#divCareerChart');
            if (category == 'EDUCATION') {
                divNavColArray[1].removeClass(hoverClass).addClass(selectedClass);
            }
            break;
        case 'SKILLS':
            divNavColArray[2].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[0].show();
            focusDiv = $('#divSkillChart');
            break;
        case 'EXPERIENCE':
            divNavColArray[3].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[1].show();
            focusDiv = $('#divExperience');
            resizeImages();
            break;
        case 'PORTFOLIO':
            divNavColArray[4].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[1].show();
            focusDiv = $('#divPortfolio');
            resizeImages();
            break;
        case 'TOOLS': 
            divContentArray[0].show();
            focusDiv = $('#divToolChart');
            break;
        case 'ABILITIES':
            divContentArray[0].show();
            focusDiv = $('#divAbilityChart');
            break;
        case 'CONTACT':
            divContentArray[0].show();
            focusDiv = $('#divContactInfo');
            break;
    }
    
    // Scroll to selected category
    getFocus(focusDiv);

    // Show chart annivation by reloading charts
    for (var i = 0; i < chartNames.length; i++)
    {
        renderChart(chartNames[i]);
    }
}

function resizeNavbar() {
    // Show sidebar and hide navigation bar
    if ($(window).width() < 1000) {
        $.each(divNavColArray, function (index, value) {
            divNavColArray[index].hide();
            $('#divName').css('padding', '41px 0');
            $('#divMenu').show();
        })
    } else {
        // Hide sidebar and show navigation bar
        $.each(divNavColArray, function (index, value) {
            divNavColArray[index].show();
            $('#divName').css('padding', '');
            $('#divMenu').hide();
            closeSidebar();
        })
    }
}

function resizeImages () { 
    // re-organize images when window size is changing
    if ($(window).width() < 750) {
        $('.jobImg').width('80%');
        $('.jobImg').height('80%');
        $('.jobImg').css('float', 'none');
        $('.jobImg').css('margin', '0 auto');
    } else {
        $('.jobImg').width('50%');
        $('.jobImg').height('50%');
        $('.jobImg').css('float', 'left');
    }
}

function openSidebar() {
    $("#divSidebar").width('200px');
}

function closeSidebar() {
    $("#divSidebar").width('0px');
}

function getFocus(focusDiv) {
    $('html, body').animate({
        scrollTop: focusDiv.offset().top - 128
    }, 300);
}

function createMarkUpWithHTML(myProfolioArray) {
    var htmlText = null;  
    htmlText = buildHTML(myProfolioArray);

    if (myProfolioArray === undefined) {
        if ($('#tblCharacteristics').length) {
            $('#tblCharacteristics').append(htmlText);
        }     
    } else {
        if ($('#divPortfolio').length) {
            $('#divPortfolio').append(htmlText);
        }
    }   
}

function buildHTML(myProfolioArray) {
    var rowHTML = '';

    if (myProfolioArray === undefined) {
        var numChar = 5,
        numThumbs = 5,
        addThumbsUp_fill = '<td><img src="css/img/icons/icnThumbsUp_fill.svg" alt="ThumbsUp" class="icnThumbUp"></td>',
        addThumbsUp = '<td><img src="css/img/icons/icnThumbsUp.svg" alt="ThumbsUp" class="icnThumbUp"></td>';

        rowHTML += '<table>';
        // Add characteristic section
        for (var i = 0; i < numChar; i++) {
            rowHTML += '<tr>'

            // Five characteristics
            switch (i) {
                case 1:
                case 2:
                case 4:
                    if (i == 1) {
                        rowHTML += '<td class="tdAttrName">Multi-tasking</td>';
                    } else if (i == 2) {
                        rowHTML += '<td class="tdAttrName">Fast-learner</td>';
                    } else if (i == 4) {
                        rowHTML += '<td class="tdAttrName">Problem-solver</td>';
                    }

                    for (var j = 0; j < numThumbs; j++) {
                        if (j < 4) {
                            rowHTML += addThumbsUp_fill;
                        } else {
                            rowHTML += addThumbsUp;
                        }
                    } 
                    break;
                case 0:
                case 3:
                    if (i == 0) {
                        rowHTML += '<td class="tdAttrName">Self-motivated</td>';
                    } else if (i == 3) {
                        rowHTML += '<td class="tdAttrName">Team-oriented</td>';
                    }
                    
                    for (var j = 0; j < numThumbs; j++) {
                        rowHTML += addThumbsUp_fill;
                    }
                    break;
            }
            rowHTML += '</tr>';
        }
        rowHTML += '</table>';
        
        return rowHTML;      
    } else {
        for (var i = 0; i < myProfolioArray.length; i++) {
            rowHTML += '<div class="divContentBlock" style="padding-bottom: 5px;">';
            
            $.each(myProfolioArray[i], function(key, value) {
                if (key == 'project') {                  
                    // Add onclick to show image
                    if (value.toUpperCase() == 'SEARCH ENGINE PROJECT' ||
                        value.toUpperCase() == 'BUS TRACKING PROJECT') {
                        rowHTML += '<span style="font-size: 1.1rem; float: left; padding-right: 15px;">' + 
                                    '<strong>' + value.toUpperCase() + '</strong></span>' + 
                                    '<img src="css/img/icons/icnPicture.svg" alt="View Image" title="View Image" class="imgView" ' +  
                                    'onclick="openPopup(\'' + value.toUpperCase() + '\');"' + 
                                    'data-toggle="modal" data-target="#popupBackground">' + 
                                    //clear float
                                    '<div class="clearFloat"></div><ul>';
                    } else {
                        rowHTML += '<span style="font-size: 1.1rem;"><strong>' + value.toUpperCase() + '</strong></span><ul>';
                    }
                } else {
                    rowHTML += '<li><span>' + key.toUpperCase() + ': </span><br>';
                    rowHTML += (key == 'timestamp') ? moment(value).format('MMM YYYY') : value;                    
                    rowHTML += '</li>';
                }
            });           
            rowHTML += '</ul></div>';
        }
        return rowHTML;
    } 
}

function openPopup(project) {
    closeSidebar();

    $('.imgProfolios, .imgSmallProfolios').hide();
    $('.divGameControls').hide();
    $('#divBtnRow').css('width', '');        
    $('#modalCenterTitle').html('<strong>Photos</strong>');
    $('#divMinsweeper').hide();

    // Only show particular project small img for selection and default large image for view
    if (project == 'SEARCH ENGINE PROJECT') {
        $('.imgProfolios.searchEngine:first').show();
        $('.imgSmallProfolios.searchEngine').show();
    } else if (project == 'BUS TRACKING PROJECT') {    
        $('.imgProfolios.busTracking:first').show();
        $('.imgSmallProfolios.busTracking').show();
    } else if (project == 'GAMES') {
        $('#modalCenterTitle').html('<strong>Minesweeper</strong>');
        $('.divGameControls').show();
        $('#divBtnRow').width('100%');
        $('#divMinsweeper').show();

        // Generate minesweeper game at default level
        libMinesweeper.setLevel(1);
        libMinesweeper.startGame();
    }
}

function selectImage(index) {
    // all child img tag under modal-body class
    $('.modal-body > img').each(function () {
        $(this).hide();
    });
    
    // Only show the selected image
    $('.imgProfolios:eq(' + index + ')').show();
}

