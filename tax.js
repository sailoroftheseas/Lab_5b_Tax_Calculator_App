"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

const calculateTax = (salesAmount, taxPercent) => {
const taxAmount = salesAmount * taxPercent/100; 
return taxAmount; 
};

const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

var processEntries = function() {
    var salesAmount = parseFloat($("salesAmount").value);
    var taxPercent = parseFloat($("taxPercent").value);

    if (isNaN(salesAmount)) {
        alert("Both entries must be numeric");
    } else if (isNaN(taxPercent) || taxPercent <= 0 || taxPercent >= 100) {
        alert(getErrorMsgTax("Tax percentage"));
        focusAndSelect("taxPercent");
    }  else {
        $("total").value = (salesAmount + calculateTax(salesAmount, taxPercent)).toFixed(2); 
        $("total").focus();
    }
};



window.onload = function() {
    $("calculate").onclick = processEntries;
    $("salesAmount").focus();
};