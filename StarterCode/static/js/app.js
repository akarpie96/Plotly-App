var dropdown = d3.select("#selDataset");


function Init(){
    d3.json("samples.json").then((data)=> {
            console.log(data)

    var names = data.names

 
    names.forEach(function(name) {
        dropdown.append("option").text(name).property("value")})
    var samplesInit= data.samples[0].sample_values
    var otuInit = data.samples[0].otu_labels
    console.log(samplesInit)
    console.log(otuInit)
    })}

// handling change
// d3.selectAll("#selDataset").on("change", getData )
// function getData(){
// var dropdownMenu = d3.select("#selDataset");
// var dataset = dropdownMenu.property("value");

// if (dataset === 'option')
// x=[]

// }


    
Init()