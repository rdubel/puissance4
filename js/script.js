// var grid = document.getElementById('grid');
// var slots;
// var turn = "r";
// var victory = document.getElementById('victory');
//
// function generateGrid(x, y) {
//     var tab = [];
//     for (var i = 0; i < x; i++) {
//         tab[i] = [];
//         for (var j = 0; j < y; j++) {
//             tab[i][j] = "";
//         }
//     }
//     return tab;
// }
//
// function print() {
//     while (grid.firstChild) {
//         grid.removeChild(grid.firstChild);
//     }
//     var th = document.createElement("thead");
//     grid.appendChild(th);
//     for(var i=0; i<slots[0].length; i++) {
//         var btn = document.createElement("th");
//         btn.setAttribute("onclick", "placeChip("+i+")");
//         th.appendChild(btn);
//     }
//
//     for (i=0; i<slots.length; i++){
//         var row = document.createElement("tr");
//         grid.appendChild(row);
//         for (j=0; j<slots[i].length; j++) {
//             var col = document.createElement("td");
//             if (slots[i][j] == "r") {
//                 col.className = "red";
//             }
//             if (slots[i][j] == "y") {
//                 col.className = "yellow";
//             }
//             row.appendChild(col);
//             col.setAttribute("onclick", "placeChip("+j+")");
//         }
//     }
// }
//
// function placeChip(x) {
//     var chip = 1;
//     for (var i = slots.length - 1; i >= 0; i--) {
//         if (chip != 0) {
//             if (slots[i][x] == "") {
//                 slots[i][x] = turn;
//                 print(grid, slots);
//                 checkGrid();
//                 chip = 0;
//                 if (turn == "y") {
//                     turn = "r";
//                 } else {
//                     turn = "y";
//                 }
//             }
//         }
//     }
//
// }
//
// function checkGrid() {
//     for (var i=0; i<slots.length; i++) {
//         for (var j=0; j<slots[i].length; j++) {
//             if (slots[i][j] != "") {
//                 if (slots[i][j] == "r") {
//                     var player = "rouges";
//                 }
//                 if (slots[i][j] == "y") {
//                     var player = "jaunes";
//                 }
//                 var nextJ = j;
//                 while (nextJ < slots[i].length && slots[i][nextJ] == slots[i][j]) {
//                     nextJ++;
//                 }
//                 if (nextJ-j >= 4) {
//                     var p = document.createElement('h2');
//                     p.innerHTML = "Victoire des "+player;
//                     victory.appendChild(p);
//                 }
//                 var nextI = i;
//                 while (nextI < slots.length && slots[nextI][j] == slots[i][j]) {
//                     nextI++;
//                 }
//                 if (nextI-i >= 4) {
//                     var p = document.createElement('h2');
//                     p.innerHTML = "Victoire des "+player;
//                     victory.appendChild(p);
//                 }
//                 var diagI = i;
//                 var diagJ = j;
//                 while (diagI < slots.length && diagJ < slots[i].length && slots[diagI][diagJ] == slots[i][j]) {
//                     diagI++;
//                     diagJ++;
//                 }
//                 if(diagI-i >= 4 && diagJ-j >=4){
//                     var p = document.createElement('h2');
//                     p.innerHTML = "Victoire des "+player;
//                     victory.appendChild(p);
//                 }
//                 var diagI2 = i;
//                 var diagJ2 = j;
//                 while (diagI2 < slots.length && diagJ2 >= 0 && slots[diagI2][diagJ2] == slots[i][j]) {
//                     diagI2++;
//                     diagJ2--;
//                 }
//                 if(diagI2-i >= 4 && j-diagJ2 >=4){
//                     var p = document.createElement('h2');
//                     p.innerHTML = "Victoire des "+player;
//                     victory.appendChild(p);
//                 }
//             }
//         }
//     }
// }
//
// function raz() {
//         var sure = confirm("Are you sure ?");
//         if (sure) {
//             slots =  generateGrid(6, 7);
//             print();
//         }
// }
//
// slots = generateGrid(6, 7);
// print(grid, slots);

$(document).ready(function() {
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
        $("#grid").empty();
        var th = $("<thead></thead>");
        $("#grid").append(th);
        for(var i=0; i<slots[0].length; i++) {
            var btn = $("<th></th>");
            btn.attr("id", i);
            th.append(btn.on("click", function() {
                placeChip(this.id);
            }));
        }

        for (i=0; i<slots.length; i++){
            var row = $("<tr></tr>");
            $("#grid").append(row);
            for (j=0; j<slots[i].length; j++) {
                var col = $("<td></td>")
                col.attr("id", j);
                if (slots[i][j] == "r") {
                    col.addClass('red')
                }
                if (slots[i][j] == "y") {
                    col.addClass('yellow')
                }
                row.append(col.on('click', function() {
                    placeChip(this.id);
                }));

            }
        }
    }

    function placeChip(x) {
        var chip = 1;
        for (var i = slots.length - 1; i >= 0; i--) {
            if (chip != 0) {
                if (slots[i][x] == "") {
                    slots[i][x] = turn;
                    print(slots);
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
        for (var i=0; i<slots.length; i++) {
            for (var j=0; j<slots[i].length; j++) {
                if (slots[i][j] != "") {
                    if (slots[i][j] == "r") {
                        var player = "rouges";
                    }
                    if (slots[i][j] == "y") {
                        var player = "jaunes";
                    }
                    var nextJ = j;
                    while (nextJ < slots[i].length && slots[i][nextJ] == slots[i][j]) {
                        nextJ++;
                    }
                    if (nextJ-j >= 4) {
                        var p = $("<h2></h2>");
                        $("#victory").append(p.html('Victoire des '+player))
                    }
                    var nextI = i;
                    while (nextI < slots.length && slots[nextI][j] == slots[i][j]) {
                        nextI++;
                    }
                    if (nextI-i >= 4) {
                        var p = $("<h2></h2>");
                        $("#victory").append(p.html('Victoire des '+player))
                    }
                    var diagI = i;
                    var diagJ = j;
                    while (diagI < slots.length && diagJ < slots[i].length && slots[diagI][diagJ] == slots[i][j]) {
                        diagI++;
                        diagJ++;
                    }
                    if(diagI-i >= 4 && diagJ-j >=4){
                        var p = $("<h2></h2>");
                        $("#victory").append(p.html('Victoire des '+player))
                    }
                    var diagI2 = i;
                    var diagJ2 = j;
                    while (diagI2 < slots.length && diagJ2 >= 0 && slots[diagI2][diagJ2] == slots[i][j]) {
                        diagI2++;
                        diagJ2--;
                    }
                    if(diagI2-i >= 4 && j-diagJ2 >=4){
                        var p = $("<h2></h2>");
                        $("#victory").append(p.html('Victoire des '+player))
                    }
                }
            }
        }
    }

    $("#raz").click(function() {
        var validate = confirm("Are you sure ?")
        if (validate) {
            slots = generateGrid(6, 7);
            print();
        }
    })

    var slots = generateGrid(6, 7);
    print();
});
