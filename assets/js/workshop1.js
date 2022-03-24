// CALCULATIONS AND FORMULAS
// =========================


// Triangle code

//     == PERIMETER ==
function perimeterTriangle(sideATriangle, sideBTriangle, baseTriangle) {
    return (sideATriangle + sideBTriangle + baseTriangle);
};
//    == HEIGHT ==
// Equilateral and isosceles triangle 
function heightTriangle(sideATriangle, baseTriangle){
    return Math.sqrt(Math.pow(sideATriangle,2) - Math.pow((baseTriangle / 2),2));
};
//     == AREA ==
function areaTriangle(baseTriangle, sideATriangle){
    return ((baseTriangle * (heightTriangle(sideATriangle, baseTriangle))) / 2);
};


// Square code

//     == PERIMETER ==
function perimeterSquare(sideASquare) {
    return sideASquare *4;
};
//     == AREA ==
function areaSquare(sideASquare) {
    return Math.pow(sideASquare, 2);
};


// Rectangle code

//     == PERIMETER ==
function perimeterRectangle(sideARectangle, sideBRectangle) {
    return 2 * (sideARectangle + sideBRectangle);
};
//     == AREA ==
function areaRectangle(sideARectangle, sideBRectangle) {
    return sideARectangle * sideBRectangle;
};


// Circle code

//     == PERIMETER ==
function perimeterCircle(radioCircle) {
    return 2 * Math.PI * radioCircle
};
//     == AREA ==
function areaCircle(radioCircle) {
    return Math.PI * Math.pow(radioCircle, 2);
};
//     == DIAMETER ==
function diameterCircle(radioCircle) {
    return 2 * radioCircle;
};


// STOCK INPUT CALLS
// =========================

// Triangle calls code
function InputTriangle() {
    const sideABTriangle = +document.getElementById("sideATriangle").value;
    const sideBCTriangle = +document.getElementById("sideBTriangle").value;
    const sideACTriangle = +document.getElementById("sideCTriangle").value;
// Triangle type validation
    if (sideABTriangle, sideBCTriangle, sideACTriangle != "") {
        switch (sideABTriangle, sideBCTriangle, sideACTriangle != 0) {
            case (sideABTriangle == sideBCTriangle == sideACTriangle):
                var sideATriangle = sideABTriangle;
                var sideBTriangle = sideBCTriangle;
                var baseTriangle  = sideACTriangle ;
                break;
            case (sideABTriangle == sideBCTriangle):
                var sideATriangle = sideABTriangle;
                var sideBTriangle = sideBCTriangle;
                var baseTriangle  = sideACTriangle; 
                break;
            case (sideACTriangle == sideBCTriangle):
                var sideATriangle = sideACTriangle;
                var sideBTriangle = sideBCTriangle;
                var baseTriangle  = sideABTriangle;
                break;    
            case (sideABTriangle == sideACTriangle):
                var sideATriangle = sideABTriangle;                   
                var sideBTriangle = sideACTriangle; 
                var baseTriangle  = sideBCTriangle;
                break;
            default:
                var sideATriangle = 0                 
                var sideBTriangle = 0
                var baseTriangle = 0
                alert("No es un triangulo isosceles ni equilatero")
        };            
        document.getElementById("perimeterTriangle").innerText = (`${perimeterTriangle(sideATriangle, sideBTriangle, baseTriangle)} cm`)
        document.getElementById("areaTriangle").innerText = (`${areaTriangle(baseTriangle, sideATriangle)} cm2`)
        document.getElementById("heightTriangle").innerText = (`${heightTriangle(sideATriangle, baseTriangle)} cm`)

    } else {
        alert("Sin medidas no hay calculos")
    };
};

// Square calls code
function InputSquare() {
    const sideABSquare = +document.getElementById("sideASquare").value;
    const sideBCSquare = +document.getElementById("sideBSquare").value;
// Square or Rectangle type validation
    if (sideABSquare, sideBCSquare != "") {
        switch (sideABSquare, sideBCSquare != 0) {
            case (sideABSquare == sideBCSquare):
                var sideASquare = sideABSquare;
                var sideBSquare = sideBCSquare;
                break;
            case (sideABSquare !== sideBCSquare):
                var sideARectangle = sideABSquare;
                var sideBRectangle = sideBCSquare;
                break;    
        };            
        document.getElementById("perimeterSquare perimeterRectangle").innerText = (`${perimeterSquare(sideASquare, sideBSquare) || perimeterRectangle(sideARectangle, sideBRectangle)} cm`);
        document.getElementById("areaSquare areaRectangle").innerText = (`${areaSquare(sideASquare) || areaRectangle(sideARectangle, sideBRectangle)} cm2`);
    } else {
        alert("Sin medidas no hay calculos");
    };
};

// Circle calls code
function InputCircle() {
    const radioCircle = +document.getElementById("radioCircle").value;
// Radio validation
    if (radioCircle, radioCircle != "" || 0) {               
        document.getElementById("perimeterCircle").innerText = (`${perimeterCircle(radioCircle)} cm`);
        document.getElementById("areaCircle").innerText = (`${areaCircle(radioCircle)} cm2`);
        document.getElementById("diameterCircle").innerText = (`${diameterCircle(radioCircle)} cm`);
    } else {
        alert("Sin medida no hay calculos");
    };
};
