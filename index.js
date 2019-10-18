"use strict";

(function() {
    let data = "";
    let svg = "";
    const measurements = {
        width: 500,
        height: 500,
        marginAll: 50
    }

    window.onload = function() {
        console.log("it is working")
        d3.csv("Admission_Predict.csv")
            .then((csvData) => {
                data = csvData
            })
    }
})();    