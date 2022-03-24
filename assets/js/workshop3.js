// CALCULATIONS AND FORMULAS
// =========================

//     == ARITHMETIC AVERAGE ==

function arithmeticAverage(list) {
    return list.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    ) / list.length;
};

//     == ARITHMETIC MODE ==

const listCount = {};  

function mode(list) {

    list.map(
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1;
            } else {
                listCount[element] = 1;
            }
    });

    const listArray = Object.entries(listCount).sort(
        function (elementA, elementB) {
            return elementA[1] - elementB[1];
    });
    return listArray[listArray.length - 1][0];
};

//     == ARITHMETIC MEDIAN ==

function median(list) {
 
    let listHalf = parseInt(list.length / 2);
        
    function valuePair(list) {
        return list.length % 2 == 0 ? true : false;   
    };

    if (valuePair(list) == true ) {
        let elementA = list.sort()[listHalf - 1];
        let elementB = list.sort()[listHalf];
         return arithmeticAverage([elementA, elementB]);
    } else {
        return list.sort()[listHalf];
    };
}

//     == GEOMETRIC MEDIAN ==

function geometricMedian(list) {
    let index = list.length;
    
    let filing = list.reduce(function (accumulatedValue,currentValue){
        return accumulatedValue * currentValue
    });

    return (filing ** (1/index)).toFixed(3);
};

// STOCK INPUT CALLS
// =========================

// Array 
list = [];

//     == VIEW LIST ==
function viewList(list) {
    item = document.getElementById("viewList");
    item.innerHTML = "";
    
    list.forEach((element, index) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `<strong>${index + 1} - </strong> ${element}`;
        item.appendChild(listElement);
    });
};

//     == ADD ITEM ==
function addList() {
    const value = +document.getElementById("value").value;
// Data type validation    
    if (value == 0 || "") {
        alert("Necesitamos agregar valores numericos");
    } else {
        list.push(value);
        viewList(list);
    };
};

//     == REMOVE ITEM ==
function removeList() {
    const value = +document.getElementById("value").value;
// Data type validation    
    if (value == 0 || "") {
        alert("Necesitamos una posicion para borrar el valor");
    } else {
        list.splice((value-1), 1);
        viewList(list);
    };
};


function calculator() {
    const operationType = document.getElementById("operationType").value; 
// Data type validation
    if (list.length != 0) {
        switch ( operationType != "") {
            case (operationType == "arithmeticAverage"):
                document.getElementById("inputValue").innerText = arithmeticAverage(list);
                break;
            case operationType == "mode":
                document.getElementById("inputValue").innerText = mode(list);
                break;
            case operationType == "median":
                document.getElementById("inputValue").innerText = median(list);
                break; 
            case operationType == "geometricMedian":
                document.getElementById("inputValue").innerText = geometricMedian(list);
                break;     
            default:
                alert("Necesitamos un tipo de operacion");
        };
    } else {
        alert("Necesitamos valores validos")
    };
};