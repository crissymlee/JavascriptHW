// from data.js
var tableData = data;

// YOUR CODE HERE!

tableData.forEach(displayTable);

var process = d3.select("#filter-btn");

 process.on("click", function() {

   d3.select("tbody").html("");

// Get the value property of the input element
    var date_time = d3.select("#datetime").property("value");
     console.log(date_time);

    var filteredData = tableData.filter(record => record.datetime === date_time);
     console.log(filteredData)

//  Display the filtered dataset
    filteredData.forEach(displayTable);

});

// Define a function to append table based on reports data
function displayTable(data) {
    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

// for each key value pair in an object
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

       
    });
}