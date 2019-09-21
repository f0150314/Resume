"use strict";

var divNavColArray = [],
    divContentArray = [];

function init() {
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
    renderSkillChart();

    // Initialize attribute tables
    createAttributeTables('lang');
    createAttributeTables('char');
}

function showContent(category) {
    // Close sidebar if it is open after clicking item
    if ($("#divSidebar").width() > 0) {
        closeSidebar();
    }

    // Hide all contents and add hover behavior 
    // and remove selected behavior for all navigation columns
    for (var i = 0; i < divNavColArray.length; i++) {
        if (!divNavColArray[i].hasClass('divHover')) {
            divNavColArray[i].addClass('divHover');
        }

        if (divNavColArray[i].hasClass('divSelected')) {
            divNavColArray[i].removeClass('divSelected');
        }
    }

    for (var i = 0; i < divContentArray.length; i++) {
        divContentArray[i].hide();
    }

    // Show selected contents and remove hover behavior
    switch (category) {
        case 'ABOUT':
            divNavColArray[0].removeClass('divHover').addClass('divSelected');
            divContentArray[0].show();
            break;
        case 'SKILLS':
            divNavColArray[1].removeClass('divHover').addClass('divSelected');
            divContentArray[0].show();
            
            $('html, body').animate({
                scrollTop: $('#divSkillChart').offset().top - 143
            }, 300);

            renderSkillChart();
            break;
        case 'EXPERIENCE':
            divNavColArray[2].removeClass('divHover').addClass('divSelected');
            divContentArray[1].show();
            break;
        case 'PORTFOLIO':
            divNavColArray[3].removeClass('divHover').addClass('divSelected');
            divContentArray[1].show();
            break;
        case 'CONTACT':
            divNavColArray[4].removeClass('divHover').addClass('divSelected');
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

function createAttributeTables(attribute) {
    // Build html
    var htmlText = null;  
    htmlText = buildHTML(attribute);

    // Append html to tables
    if (attribute == 'lang' && $('#tblLanguages').length) {
        $('#tblLanguages').append(htmlText);
    } 

    if (attribute == 'char'&& $('#tblCharacteristics').length) {
        $('#tblCharacteristics').append(htmlText);
    }     
}

function buildHTML(attribute) {
    var rowHTML = '',
        numLang = 2,
        numChar = 5,
        numThumbs = 6,
        addThumbsUp_fill = '<td><img src="css/img/icons/icnThumbsUp_fill.svg" alt="ThumbsUp" class="icnThumbUp"></td>',
        addThumbsUp = '<td><img src="css/img/icons/icnThumbsUp.svg" alt="ThumbsUp" class="icnThumbUp"></td>';

    // Add language section
    if (attribute == 'lang') {
        for (var i = 0; i < numLang; i++) {
            rowHTML += '<tr>'
            
            // First language: English
            if (i == 0) {
                rowHTML += '<td class="tdAttrName">English</td>';
                
                // Add thumbsup
                for (var j = 0; j < numThumbs; j++) {
                    if (j < 4) {
                        rowHTML += addThumbsUp_fill;
                    } else {
                        rowHTML += addThumbsUp;
                    }
                }            
            } else {
                // Second language: Chinese
                rowHTML += '<td class="tdAttrName">Chinese</td>';
                
                // Add thumbsup
                for (var j = 0; j < numThumbs; j++) {
                    rowHTML += addThumbsUp_fill;
                }
            }
            rowHTML += '</tr>';
        }
    } else if (attribute == 'char') {
        // Add characteristic section
        for (var i = 0; i < numChar; i++) {
            rowHTML += '<tr>'

            // Five characteristics
            switch (i) {
                case 1:
                case 2:
                case 4:
                    if (i == 1) {
                        rowHTML += '<td class="tdAttrName">Multitasker</td>';
                    } else if (i == 2) {
                        rowHTML += '<td class="tdAttrName">Fast-learner</td>';
                    } else if (i == 4) {
                        rowHTML += '<td class="tdAttrName">Problem-solving</td>';
                    }

                    // Add thumbs up
                    for (var j = 0; j < numThumbs; j++) {
                        if (j < 5) {
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
                        rowHTML += '<td class="tdAttrName">Teamwork</td>';
                    }
                    
                    // Add thumbs up
                    for (var j = 0; j < numThumbs; j++) {
                        rowHTML += addThumbsUp_fill;
                    }
                    break;
            }
            rowHTML += '</tr>';
        }
    }
    return rowHTML;
}

