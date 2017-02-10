var grid = document.getElementById('grid');
var tdArray = [];
tdArray.push(document.getElementsByTagName("td"));
var slotArray;
var turn = "r";



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

function raz() {
        var sure = confirm("Are you sure ?");
        if (sure) {
            slotArray =  generateGrid(6, 7);
            print();
        }
}

slotArray = generateGrid(6, 7);
print(grid, slotArray);
console.log(tdArray);
