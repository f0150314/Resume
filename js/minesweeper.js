'use strict';
var libMinesweeper = (function () {
    // Declare private variables
    var divMinsweeper,
        btnLevel,     
        mineLocations,

        // Default level configurations;
        numOfMines = 10,
        maxCellIndex = 8; //It's actually 7 (zero based index)

    function _generateMines () {
        // Clear out mines
        mineLocations = [];

        while (mineLocations.length < numOfMines) {
            // Create new mine
            var mine = new Object();
            mine.row = Math.floor(Math.random() * 100);
            mine.col = Math.floor(Math.random() * 100);
            mine.id = 'mine_' + mine.row + '_' + mine.col;
            mine.imgHTML = '<div class="divMine"></div>';

            if (mine.row < maxCellIndex && 
                mine.col < maxCellIndex && 
                mineLocations.findIndex(x => x.id == mine.id) == -1) {
                
                // Add object into array if it doesn't exist
                mineLocations.push(mine);           
            }
        }
    }

    function _buildMinesweeperTable () {
        var rowHTML = '<table>';

        // Add rows
        for (var row = 0; row < maxCellIndex; row++) {
            // Filter Mines based on rows
            var filteredMines = mineLocations.filter(x => x.row == row);
            
            rowHTML += '<tr>';

            // Add cells
            for (var col = 0; col < maxCellIndex; col++) {
                // Get col index in filteredMines array
                var filteredMines_colIndex = filteredMines.findIndex(x => x.col == col);

                // Even rows
                if ((row % 2 == 0 && col % 2 == 0) || 
                    (row % 2 != 0 && col % 2 != 0)) {              
  
                    // No bombs
                    if (filteredMines_colIndex == -1) {
                        rowHTML += '<td style="background-color: #a8d9ff;"></td>';
                    } else {
                        rowHTML += '<td style="background-color: #a8d9ff;">' + filteredMines[filteredMines_colIndex].imgHTML + '</td>';
                    }
                } else {
                    if (filteredMines_colIndex == -1) {
                        rowHTML += '<td style="background-color: #7cc4fc;"></td>';
                    } else {
                        rowHTML += '<td style="background-color: #7cc4fc;">' + filteredMines[filteredMines_colIndex].imgHTML + '</td>';
                    }   
                }
            }

            rowHTML += '</tr>'
        }

        rowHTML += '</table>';

        // Append to the div
        divMinsweeper.append(rowHTML);
    }

    function _startGame () {
        _generateMines();
        _buildMinesweeperTable();
    } 

    // Public variables and functions
    return {
        init: function () {
            divMinsweeper = $('#divMinsweeper');
            btnLevel = $('#btnLevel');
        },

        changeLevel: function (level) {
            switch (level) {
                case 1: 
                    btnLevel.html('EASY ');
                    numOfMines = 10;
                    maxCellIndex = 8;
                    break;
                case 2:
                    btnLevel.html('MEDIUM');
                    numOfMines = 30; 
                    maxCellIndex = 12;
                    break;
                case 3:
                    btnLevel.html('DIFFICULT');
                    numOfMines = 60;
                    maxCellIndex = 16;
                    break;
            }
        },

        startGame: function () {
            // Clear out minesweeper HTML
            divMinsweeper.html('');

            // Reconfigure minesweeper
            _startGame();
        }
    };
})();