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

    // Initialize webpage size
    windowResize();
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

function windowResize() {
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

