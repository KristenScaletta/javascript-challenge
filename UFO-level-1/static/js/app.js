//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
// let tableData = data;
console.log(data);
// get table references where table will be inserted
let table = d3.select("table");




data.forEach(function(buildTable) {
  //console.log(buildTable);
  
  
  let row = table.append("tr");
    
  Object.entries(buildTable).forEach(function([key, value]) {
 // console.log(key, value);
  let cell = row.append("td");
  cell.text(value);
  });
  });


// Select the button
let button = d3.select("#filter-btn");



// Create event handlers 



button.on("click", runFilter);



// Complete the event handler function for the form
function runFilter() {
 //clears table
  table.remove(data);
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  console.log(inputValue);
  
  if (inputValue != null)
  {

   
    let filtered = data.filter(sighting => sighting.datetime === String(inputValue));
    filtered.forEach(function(filteredData) {
      console.log(filteredData);
      let row = table.append("tr");
      Object.entries(filteredData).forEach(function([key, value]) {
      //console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
      });
      });
    
  }
  else
  {

    data.forEach(function(buildTable) {
      //console.log(buildTable);

   
      let row = table.append("tr");
        
      Object.entries(buildTable).forEach(function([key, value]) {
      //console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
      });
      });
  }

 

};
    
