"use strict";

var divNavColArray = [],
    divContentArray = [];

function init() {
    //Set Chart timeozonOffset
    Highcharts.setOptions({
        time: {
            timezoneOffset: -10 * 60
        }
    });

    // Populate div arrays
    $('.divHover').each(function () {
        divNavColArray.push($(this));
    });

    $('.divContentBody').each(function () {
        divContentArray.push($(this));
    });

    // Initialize body content and hover behavior
    showContent('ABOUT');
    divNavColArray[0].removeClass('divSelected');

    // Initialize navigation bar
    resizeNavbar();

    // Initialize skill chart
    // TO DO: Use loop to render charts
    renderChart('Skill');
    renderChart('English');
    renderChart('Chinese');
    renderChart('Tool');
    renderChart('Career');

    // Initialize characteristic tables
    createAttributeTables();
}

function showContent(category) {
    var focusDiv = null,
        hoverClass = 'divHover',
        selectedClass = 'divSelected';

    // Close sidebar if it is open after clicking item
    if ($("#divSidebar").width() > 0) {
        closeSidebar();
    }

    // Hide all contents and add hover behavior 
    // and remove selected behavior for all navigation columns
    for (var i = 0; i < divNavColArray.length; i++) {
        if (!divNavColArray[i].hasClass(hoverClass)) {
            divNavColArray[i].addClass(hoverClass);
        }

        if (divNavColArray[i].hasClass(selectedClass)) {
            divNavColArray[i].removeClass(selectedClass);
        }
    }

    for (var i = 0; i < divContentArray.length; i++) {
        divContentArray[i].hide();
    }

    // Show selected contents and remove hover behavior
    switch (category) {
        case 'ABOUT':
            divNavColArray[0].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[0].show();
            
            // Scroll to the content
            focusDiv = $('#divAboutMe');
            getFocus(focusDiv);
            break;
        case 'SKILLS':
            divNavColArray[1].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[0].show();
            
            focusDiv = $('#divSkillChart');
            getFocus(focusDiv);

            // Render skill chart
            renderChart('Skill');
            break;
        case 'EXPERIENCE':
            divNavColArray[2].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[1].show();
            break;
        case 'PORTFOLIO':
            divNavColArray[3].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[1].show();
            break;
        case 'CONTACT':
            divNavColArray[4].removeClass(hoverClass).addClass(selectedClass);
            divContentArray[0].show();
            break;
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

function createAttributeTables() {
    var htmlText = null;  
    htmlText = buildHTML();

    if ($('#tblCharacteristics').length) {
        $('#tblCharacteristics').append(htmlText);
    }     
}

function buildHTML() {
    var rowHTML = '',
        numChar = 5,
        numThumbs = 5,
        addThumbsUp_fill = '<td><img src="css/img/icons/icnThumbsUp_fill.svg" alt="ThumbsUp" class="icnThumbUp"></td>',
        addThumbsUp = '<td><img src="css/img/icons/icnThumbsUp.svg" alt="ThumbsUp" class="icnThumbUp"></td>';

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
                    rowHTML += '<td class="tdAttrName">Problem-solving</td>';
                }

                // Add thumbs up
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
                
                // Add thumbs up
                for (var j = 0; j < numThumbs; j++) {
                    rowHTML += addThumbsUp_fill;
                }
                break;
        }
        rowHTML += '</tr>';
    }
    return rowHTML;
}

