d3.json("samples.json").then((data)=> {
    console.log(data)
var names=data.names;
console.log(names)})



// function Init(){
//  var dropdown = d3.select("#selDataset");
//     d3.json("samples.json").then((data)=> {
//             console.log(data)

//     var names = data.names

 
//     names.forEach(function(name) {
//         dropdown.append("option").text(name).property("value")});   
//     })}

// // handling change
// // d3.selectAll("#selDataset").on("change", getData )
// function getData(){
// var dropdownMenu = d3.select("#selDataset");
// var dataset = dropdownMenu.property("value");

// }


    
// Init()