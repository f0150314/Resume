'use strict';

var libMinesweeper = (function () {
    // Private variables
    var divMinsweeper,
        btnLevel,     
        mineLocations,
        cellLocations,

        // Default level configurations;
        numMines,
        maxCellIndex, //It's actually 7 (zero based index)
        totalNonMineTiles;

    // Private functions
    function _setLevel (level) {
        switch (level) {
            case 1: 
                btnLevel.html('EASY ');
                numMines = 10;
                maxCellIndex = 8;
                break;
            case 2:
                btnLevel.html('MEDIUM');
                numMines = 25; 
                maxCellIndex = 12;
                break;
            case 3:
                btnLevel.html('DIFFICULT');
                numMines = 50;
                maxCellIndex = 16;
                break;
        }
        // Set total non mine tiles for win condition check
        totalNonMineTiles = Math.pow(maxCellIndex, 2) - numMines;
    }
    
    function _generateMines () {
        // Clear out mines
        mineLocations = [];

        while (mineLocations.length < numMines) {
            // Create new mine
            var mine = new Object();
            mine.row = Math.floor(Math.random() * 100);
            mine.col = Math.floor(Math.random() * 100);
            mine.id = 'mine_' + mine.row + '_' + mine.col;
            mine.div = '<div class="divMine"></div>';

            // Add object into array if it doesn't exist and in a valid position
            if (mine.row < maxCellIndex && 
                mine.col < maxCellIndex && 
                mineLocations.findIndex(x => x.id == mine.id) == -1) {
                
                mineLocations.push(mine);    
            }
        }
    }

    function _generateMineCounts () {
        // Clear out cells
        cellLocations = [];

        for (var i = 0; i < maxCellIndex; i++) {
            for (var j = 0; j < maxCellIndex; j++) {           
                // Create cell object
                var cell = new Object();
                cell.row = i;
                cell.col = j;
                cell.mineCount = 0;
                cell.div = '';
                
                // If the cell doesn't match a mine position
                if (mineLocations.findIndex(x => x.id == 'mine_' + cell.row + '_' + cell.col) == -1) {                 
                    
                    // Get number of mine adjacent to this cell
                    cell.div += '<div class="';
                    
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
                    
                    // Add number img to div tag
                    switch (cell.mineCount) {
                        case 1: 
                            cell.div += 'divOne';
                            break;
                        case 2:
                            cell.div += 'divTwo';
                            break;
                        case 3:
                            cell.div += 'divThree';
                            break;
                        case 4:
                            cell.div += 'divFour';
                            break;
                        case 5:
                            cell.div += 'divFive';
                            break;
                        case 6:
                            cell.div += 'divSix';
                            break;
                        case 7:
                            cell.div += 'divSeven';
                            break;
                        case 8:
                            cell.div += 'divEight';
                            break;
                        default:
                            cell.div += 'divZero';
                    }

                    cell.div += ' mineCount"></div>';
                    cellLocations.push(cell);
                }
            }
        }
    }

    function _buildMinesweeperTable () {
        //Clear table
        divMinsweeper.html('');

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
                    rowHTML += '<td class="tdCellLightBlue tdHover" ';
                } else {
                    rowHTML += '<td class="tdCellBlue tdHover" ';
                }
                // Add onclick and right-click event (disable menu when right clicking the cell)
                rowHTML += 'onclick="libMinesweeper.revealTiles(this);" ' + 
                           'oncontextmenu="libMinesweeper.setFlags(this); return false;">';
                
                // Add flag
                rowHTML += (mineIndex == -1) ? '<div class="divFlag number"></div>' : '<div class="divFlag mine"></div>';

                // Add mine or mine count 
                rowHTML += (mineIndex == -1) ? filteredCells[cellIndex].div : filteredMines[mineIndex].div;
                rowHTML += '</td>';
            }
            rowHTML += '</tr>'
        }
        rowHTML += '</table>';

        // Append to the div
        divMinsweeper.append(rowHTML);
    }
  
    function _revealTiles (obj) {
        // Only reveal those tiles that have not been revealed yet
        if (!($(obj).find('div').is(':visible'))) {
            
            // If the tile contains a mine, reveal all mines
            if ($(obj).find('.divMine').length > 0) {
                $('.divMine').show();
                $('.tdHover').removeClass('tdHover')
                             .prop('onclick', null);
            
            // If the tile not contains a mine, show number of mine adjacent to this tile
            } else {
                $(obj).find('.mineCount').show();
                $(obj).removeClass('tdHover')
                      .prop('onclick', null);

                totalNonMineTiles--;

                // If no more unrevealed non-mine tiles, player wins 
                if (totalNonMineTiles == 0) {
                    $('.divFlag.mine').show();
                    $('.tdHover').removeClass('tdHover')
                                 .prop('onclick', null);
                }

                // If the tile has no mine adjacent to it, recursively reveal every adjacent tile
                if ($(obj).find('div.divZero').length > 0) {

                    // Get tile row and column index
                    var objRowIndex = $(obj).closest('tr').index(),
                        objColIndex = $(obj).closest('td').index();

                    // If it's not in top row
                    if (!(objRowIndex == 0)) {
                        _revealTiles($('tr:eq(' + (objRowIndex - 1) + ') td:eq(' + objColIndex + ')'));
                    }

                    // If it's not in top row and left-most column
                    if (!(objRowIndex == 0) &&
                        !(objColIndex == 0)) {
                        _revealTiles($('tr:eq(' + (objRowIndex - 1) + ') td:eq(' + (objColIndex - 1) + ')'));
                    }

                    // If it's not in top row and right-most column
                    if (!(objRowIndex == 0) &&
                        !(objColIndex == maxCellIndex - 1)) {
                        _revealTiles($('tr:eq(' + (objRowIndex - 1) + ') td:eq(' + (objColIndex + 1) + ')'));
                    }

                    // If it's not in left-most column
                    if (!(objColIndex == 0)) {
                        _revealTiles($('tr:eq(' + objRowIndex + ') td:eq(' + (objColIndex - 1) + ')'));
                    }

                    // If it's not in right-most column
                    if (!(objColIndex == maxCellIndex - 1)) {
                        _revealTiles($('tr:eq(' + objRowIndex + ') td:eq(' + (objColIndex + 1) + ')'));
                    }

                    // If it's not in bottom row
                    if (!(objRowIndex == maxCellIndex - 1)) {
                        _revealTiles($('tr:eq(' + (objRowIndex + 1) + ') td:eq(' + objColIndex + ')'));
                    }

                    // If it's not in bottom row and left-most column
                    if (!(objRowIndex == maxCellIndex - 1) &&
                        !(objColIndex == 0)) {
                        _revealTiles($('tr:eq(' + (objRowIndex + 1) + ') td:eq(' + (objColIndex - 1) + ')'));
                    }

                    // If it's not in bottom row and right-most column
                    if (!(objRowIndex == maxCellIndex - 1) &&
                        !(objColIndex == maxCellIndex - 1)) {
                        _revealTiles($('tr:eq(' + (objRowIndex + 1) + ') td:eq(' + (objColIndex + 1) + ')'));
                    }
                }  
            }
        }  
    }

    function _setFlags (obj) {
        //TODO: 
        $(obj).find('.divFlag').show();
    }

    function _startGame () {
        _generateMines();
        _generateMineCounts();
        _buildMinesweeperTable();
    }

    // Public functions
    return {
        init: function () {
            divMinsweeper = $('#divMinsweeper');
            btnLevel = $('#btnLevel');
        },

        setLevel: function (level) {
            _setLevel(level);
        },

        startGame: function () {
            _startGame();
        },

        revealTiles: function (obj) {
            _revealTiles(obj);
        },

        setFlags: function (obj) {
            _setFlags(obj);
        }
    };
})();