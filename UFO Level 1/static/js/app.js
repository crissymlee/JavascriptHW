// from data.js
var tableData = data;

// YOUR CODE HERE!

tableData.forEach(displayTable);

var process = d3.select("#filter-btn");

 process.on("click", function() {

   d3.select("tbody").html("");

// GET DATA
    var date_time = d3.select("#datetime").property("value");
     console.log(date_time);

    var filteredData = tableData.filter(record => record.datetime === date_time);
     console.log(filteredData)

//  FILTERED DATA
    filteredData.forEach(displayTable);

});

// APPEND TABLE
function displayTable(data) {
    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

// APPEND FOR EACH KEY PAIR
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

       
    });
}