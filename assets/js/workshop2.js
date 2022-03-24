// CALCULATIONS AND FORMULAS
// =========================

// Percentage and discount

//     == DISCOUNT VALUE ==
function discountValue(value, porcentage) {
    return (value * porcentage) / 100;
}; 
//     == DISCOUNT APPLIED  ==
function discountApplied(value, porcentage) {
    return (value * (100 - porcentage)) / 100 ;
}; 

// COUPON SYSTEM
// =========================

// ARRAY
var coupons = ["AprenderEsGratis", "NuncaParesDeAprender", "EducacionOnlineEfectiva"];

function discountCoupon(coupon) {

    switch (porcentage !== "") {
        case (coupon === coupons[0]):
            porcentage = 15;
            break;
        case (coupon === coupons[1]):
            porcentage = 20;
            break;
        case coupon === coupons[2]:
            porcentage = 25;
            break;
        default:
            porcentage = 0;    
    };
    return porcentage
}

// STOCK INPUT CALLS
// =========================

function calculator() {
    const coupon = document.getElementById("coupon").value;
    const value = +document.getElementById("value").value;
    var porcentage = +document.getElementById("porcentage").value || discountCoupon(coupon);
// Data type validation
        if ((coupon !== "" && value !== 0) || (value !== 0 && porcentage !== 0 )){
            document.getElementById("inputValue").innerText = value;
            document.getElementById("discountValue").innerText = (`-${discountValue(value ,porcentage)}`);
            document.getElementById("result").innerText = (`${discountApplied(value, porcentage)}`);            
        } else {
            alert("Ncesitamos tus valores");
        };
};