var dropdown = d3.select("#selDataset");


// function Init(){
//     d3.json("samples.json").then((data)=> {
//             console.log(data)

//     var names = data.names
//     console.log(names)

//     // var otuID = data.samples.out_ids
//     // console.log(otuID)
//     names.forEach(function(name) {
    
//     dropdown.append("option").text(name).property("value")})

//     var filteredData= data.samples.filter(id => id.id ==="940")
//         // var otuTest = filteredData.map(id=>otu_ids)
//     var filter = filteredData.map(sample=>sample.otu_ids)
//     console.log(filter)
//     })}
//     Init()
// handling change
d3.selectAll("#selDataset").on("change", getData )
function getData(){
//Reading in samples.json file
d3.json("samples.json").then((data)=> {
     console.log(data)

var names = data.names
console.log(names)
 
names.forEach(function(name) {
     
dropdown.append("option").text(name).property("value")})
//Selection Variable and Creating Dropdown
var dropdownMenu = d3.select("#selDataset");
var selection = dropdownMenu.property("value");

//Creating list
var list = d3.select("#sample-metadata").append("ul")

//Getting otu IDS and Demographic 
var filteredData= data.samples.filter(id => id.id === selection)
var filteredDemo=data.metadata.filter(meta=>meta.id.toString() === selection)
console.log(filteredData)
console.log(filteredDemo)

var filteredID = filteredData.map(id=>id.otu_ids)
console.log(filteredID)

//Getting sample values

var filteredSample = filteredData.map(sample=>sample.sample_values)
console.log(filteredSample)

// Slicing 10 values from arrays
var slicedID = filteredID[0].slice(0,10)

var slicedSample = filteredSample[0].slice(0,10)
console.log(slicedID)
console.log(slicedSample)

var trace1={
    x: slicedSample,
    y: slicedID, 
    text: slicedID, 
    type: "bar",
    orientation: "h"
};


var data = [trace1];

var layout = {
    title: "Belly Button", 
    margin: {
        l:100,
        r:100,
        t:100,
        b:100
    }
}

Plotly.newPlot("bar", data,layout)




})}

getData()