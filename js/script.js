var grid = document.getElementById('grid');
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

function print(grd, tab) {
    var th = document.createElement("thead");
    grd.appendChild(th);
    for(var i=0; i<tab[0].length; i++) {
        var btn = document.createElement("th");
        btn.setAttribute("onclick", "placeChip("+i+")");
        th.appendChild(btn);
    }

    for (i=0; i<tab.length; i++){
        var row = document.createElement("tr");
        grd.appendChild(row);
        for (j=0; j<tab[i].length; j++) {
            var col = document.createElement("td");
            row.appendChild(col);
        }
    }
}

function placeChip(x) {
    console.log(x);
}

slotArray = generateGrid(6, 7);
print(grid, slotArray);
console.log(slotArray);
