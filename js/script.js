var board = document.getElementById('board');
var grid = document.getElementById('grille');
var slotArray;

function generateGrid(x, y) {
    var tab = [];
    for (var i = 0; i < x; i++) {
        tab[i] = [];
        for (var j = 0; j < y; j++) {
            tab[i][j] = "";
        }
    }
    return tab;
}


slotArray = generateGrid(6, 7);
