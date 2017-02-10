var grid = document.getElementById('grid');
var tdArray = [];
tdArray.push(document.getElementsByTagName("td"));
var slotArray;
var turn = "r";
var victory = document.getElementById('victory');

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

function print() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    var th = document.createElement("thead");
    grid.appendChild(th);
    for(var i=0; i<slotArray[0].length; i++) {
        var btn = document.createElement("th");
        btn.setAttribute("onclick", "placeChip("+i+")");
        th.appendChild(btn);
    }

    for (i=0; i<slotArray.length; i++){
        var row = document.createElement("tr");
        grid.appendChild(row);
        for (j=0; j<slotArray[i].length; j++) {
            var col = document.createElement("td");
            if (slotArray[i][j] == "r") {
                col.className = "red";
            }
            if (slotArray[i][j] == "y") {
                col.className = "yellow";
            }
            row.appendChild(col);
            col.setAttribute("onclick", "placeChip("+j+")");
        }
    }
}

function placeChip(x) {
    var chip = 1;
    for (var i = slotArray.length - 1; i >= 0; i--) {
        if (chip != 0) {
            if (slotArray[i][x] == "") {
                slotArray[i][x] = turn;
                print(grid, slotArray);
                checkGrid();
                chip = 0;
                if (turn == "y") {
                    turn = "r";
                } else {
                    turn = "y";
                }
            }
        }
    }

}

function checkGrid() {
    for (var i=0; i<slotArray.length; i++) {
        for (var j=0; j<slotArray[i].length; j++) {
            if (slotArray[i][j] != "") {
                if (slotArray[i][j] == "r") {
                    var player = "rouges";
                }
                if (slotArray[i][j] == "y") {
                    var player = "jaunes";
                }
                var nextJ = j;
                while (nextJ < slotArray[i].length && slotArray[i][nextJ] == slotArray[i][j]) {
                    nextJ++;
                }
                if (nextJ-j >= 4) {
                    var p = document.createElement('h2');
                    p.innerHTML = "Victoire des "+player;
                    victory.appendChild(p);
                }
                var nextI = i;
                while (nextI < slotArray.length && slotArray[nextI][j] == slotArray[i][j]) {
                    nextI++;
                }
                if (nextI-i >= 4) {
                    var p = document.createElement('h2');
                    p.innerHTML = "Victoire des "+player;
                    victory.appendChild(p);
                }
                var diagI = i;
                var diagJ = j;
                while (diagI < slotArray.length && diagJ < slotArray[i].length && slotArray[diagI][diagJ] == slotArray[i][j]) {
                    diagI++;
                    diagJ++;
                }
                if(diagI-i >= 4 && diagJ-j >=4){
                    var p = document.createElement('h2');
                    p.innerHTML = "Victoire des "+player;
                    victory.appendChild(p);
                }
                var diagI2 = i;
                var diagJ2 = j;
                while (diagI2 < slotArray.length && diagJ2 >= 0 && slotArray[diagI2][diagJ2] == slotArray[i][j]) {
                    diagI2++;
                    diagJ2--;
                }
                if(diagI2-i >= 4 && j-diagJ2 >=4){
                    var p = document.createElement('h2');
                    p.innerHTML = "Victoire des "+player;
                    victory.appendChild(p);
                }
            }
        }
    }
}

function raz() {
        var sure = confirm("Are you sure ?");
        if (sure) {
            slotArray =  generateGrid(6, 7);
            print();
        }
}

slotArray = generateGrid(6, 7);
print(grid, slotArray);
