'use strict';
var libMinesweeper = (function () {
    // Private variables
    var divMinsweeper,
        btnLevel,     
        mineLocations,
        cellLocations,

        // Default level configurations;
        numMines = 10,
        maxCellIndex = 8; //It's actually 7 (zero based index)

    // Private functions
    function _generateMines () {
        // Clear out mines
        mineLocations = [];

        while (mineLocations.length < numMines) {
            // Create new mine
            var mine = new Object();
            mine.row = Math.floor(Math.random() * 100);
            mine.col = Math.floor(Math.random() * 100);
            mine.id = 'mine_' + mine.row + '_' + mine.col;
            mine.imgHTML = '<div class="divMine"></div>';

            // Add object into array if it doesn't exist and in a valid position
            if (mine.row < maxCellIndex && 
                mine.col < maxCellIndex && 
                mineLocations.findIndex(x => x.id == mine.id) == -1) {
                
                mineLocations.push(mine);    
            }
        }
    }

    function _generateCells () {
        // Clear out cells
        cellLocations = [];

        for (var i = 0; i < maxCellIndex; i++) {
            for (var j = 0; j < maxCellIndex; j++) {
                // Create cell object
                var cell = new Object();
                cell.row = i;
                cell.col = j;
                cell.id = 'cell_' + cell.row + '_' + cell.col;
                cell.mineCount = 0;
                cell.span = '';
                
                // If the cell doesn't match a mine position
                if (mineLocations.findIndex(x => x.id == 'mine_' + cell.row + '_' + cell.col) == -1) {
                    
                    // Get number of mine adjacent to this cell
                    // Not the first row and top tile is mine
                    if (!(i == 0) && 
                        !(mineLocations.findIndex(x => x.id == 'mine_' + (cell.row - 1) + '_' + cell.col) == -1)) {
                        cell.mineCount++;
                    }

                    // Not the first row and and first column and top-left tile is mine
                    if (!(i == 0) && 
                        !(j == 0) &&
                        !(mineLocations.findIndex(x => x.id == 'mine_' + (cell.row - 1) + '_' + (cell.col - 1)) == -1)) {
                        cell.mineCount++;
                    }

                    // Not the first row and and last column and top-right tile is mine
                    if (!(i == 0) && 
                        !(j == maxCellIndex - 1) &&
                        !(mineLocations.findIndex(x => x.id == 'mine_' + (cell.row - 1) + '_' + (cell.col + 1)) == -1)) {
                        cell.mineCount++;
                    }

                    // Not the first column and left tile is mine
                    if (!(j == 0) && 
                        !(mineLocations.findIndex(x => x.id == 'mine_' + cell.row + '_' + (cell.col - 1)) == -1)) {
                        cell.mineCount++;
                    }

                    // Not the last column and right tile is mine
                    if (!(j == maxCellIndex - 1) && 
                        !(mineLocations.findIndex(x => x.id == 'mine_' + cell.row + '_' + (cell.col + 1)) == -1)) {
                        cell.mineCount++;
                    }
                    
                    // Not the last row and bottom tile is mine
                    if (!(i == maxCellIndex - 1) && 
                        !(mineLocations.findIndex(x => x.id == 'mine_' + (cell.row + 1) + '_' + cell.col) == -1)) {
                        cell.mineCount++;
                    }
                    
                    // Not the last row and and first column and bottom-left tile is mine
                    if (!(i == maxCellIndex - 1) && 
                        !(j == 0) &&
                        !(mineLocations.findIndex(x => x.id == 'mine_' + (cell.row + 1) + '_' + (cell.col - 1)) == -1)) {
                        cell.mineCount++;
                    }

                    // Not the last row and and last column and bottom-right tile is mine
                    if (!(i == maxCellIndex - 1) && 
                        !(j == maxCellIndex - 1) &&
                        !(mineLocations.findIndex(x => x.id == 'mine_' + (cell.row + 1) + '_' + (cell.col + 1)) == -1)) {
                        cell.mineCount++;
                    }
                    
                    // Add number count to span tag
                    cell.span = '<span>' + cell.mineCount + '</span>';
                    cellLocations.push(cell);
                }
            }
        }
    }

    function _buildMinesweeperTable () {
        var rowHTML = '<table>';

        // Add rows
        for (var row = 0; row < maxCellIndex; row++) {
            // Filter Mines and cells based on rows
            var filteredMines = mineLocations.filter(x => x.row == row),
                filteredCells = cellLocations.filter(x => x.row == row);
            
            rowHTML += '<tr>';

            // Add cells
            for (var col = 0; col < maxCellIndex; col++) {
                // Get col index from two arrays
                var mineIndex = filteredMines.findIndex(x => x.col == col),
                    cellIndex = filteredCells.findIndex(x => x.col == col);

                // Add cell colo based on odd or even rows
                if ((row % 2 == 0 && col % 2 == 0) || 
                    (row % 2 != 0 && col % 2 != 0)) {                 
                    rowHTML += '<td class="tdCellLightBlue">';
                } else {
                    rowHTML += '<td class="tdCellBlue">';
                }

                // Add mine or mine count 
                rowHTML += (mineIndex == -1) ? filteredCells[cellIndex].span : filteredMines[mineIndex].imgHTML;
                rowHTML += '</td>';
            }
            rowHTML += '</tr>'
        }
        rowHTML += '</table>';

        // Append to the div
        divMinsweeper.append(rowHTML);
    }

    function _startGame () {
        _generateMines();
        _generateCells();
        _buildMinesweeperTable();
    } 

    // Public variables and functions
    return {
        init: function () {
            divMinsweeper = $('#divMinsweeper');
            btnLevel = $('#btnLevel');
        },

        setLevel: function (level) {
            switch (level) {
                case 1: 
                    btnLevel.html('EASY ');
                    numMines = 10;
                    maxCellIndex = 8;
                    break;
                case 2:
                    btnLevel.html('MEDIUM');
                    numMines = 30; 
                    maxCellIndex = 12;
                    break;
                case 3:
                    btnLevel.html('DIFFICULT');
                    numMines = 60;
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