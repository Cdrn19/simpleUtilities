// CALCULATIONS AND FORMULAS
// =========================

//     == ARITHMETIC AVERAGE ==

function arithmeticAverage(list) {
    return list.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    ) / list.length;
};

//     == ARITHMETIC MEDIAN ==

function median(list) {

    listHalf = parseInt(list.length / 2);
    list = list.sort(function(a, b){return a - b});

    function valuePair(list) {
        return list.length % 2 == 0 ? true : false;   
    };

    if (valuePair(list) == true ) { 
        let elementA = list[listHalf - 1];
        let elementB = list[listHalf];
         return arithmeticAverage([elementA, elementB]);
    } else {
        return list[listHalf];
    };
};

//     == TOP 10% MEDiAN ==

function topMedian(list) {

    list.sort(function(a, b){return a - b});

    var spliceStart = (list.length * 90) / 100 ;
    var spliceCount = list.length - spliceStart;
    list = list.splice(spliceStart, spliceCount);

    return arithmeticAverage(list);
};

// STOCK INPUT CALLS
// =========================

// Array 
const salaryVen = [ { name: "Carlos", salary: 1225 }, 
                    { name: "Juan", salary: 134 },
                    { name: "Marcos", salary: 345 },
                    { name: "Eillen", salary: 246 },
                    { name: "Cesar", salary: 1568 },
                    { name: "Armando", salary: 1565 },
                    { name: "Alicia", salary: 1456 },
                    { name: "Luisa", salary: 204 },
                    { name: "Edith", salary: 1276 },
                    { name: "Daniel", salary: 325 },
                    { name: "Bill", salary: 101000 },
];

var list = [];

// Select default list 
function selectList(salaryVen) {
    if (list == 0) {
        return salaryVen.map(
            function (defalutList){
                return list = defalutList.salary;
            }
        );
    } else {
        return list;
    };
};

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
        list.splice(value - 1, 1);
        viewList(list);
    };
};

//     == CALCULATOR FUNCTION ==
function calculator() {
    const operationType = document.getElementById("operationType").value; 
// Data type validation
    if (list == 0) {
        list = selectList(salaryVen);
        viewList(list);
    } else {
        list;
    };    
    switch ( operationType != "") {
        case operationType == "median":
            document.getElementById("inputValue").innerText = median(list);
            break;
        case operationType == "topMedian":
            document.getElementById("inputValue").innerText = topMedian(list);
            break;                 
        default:
            alert("Necesitamos un tipo de operacion");
    };
};    