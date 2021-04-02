var dropdown = d3.select("#selDataset");


function Init(){
    d3.json("samples.json").then((data)=> {
            console.log(data)

    var names = data.names
    console.log(names)

    // var otuID = data.samples.out_ids
    // console.log(otuID)
    names.forEach(function(name) {
    
    dropdown.append("option").text(name).property("value")})
    var samplesInit= data.samples[0].sample_values
    var otuInit = data.samples[0].otu_ids
    console.log(samplesInit)

    var filteredData= data.samples.filter(id => id.id ==="940")
        // var otuTest = filteredData.map(id=>otu_ids)
    var filter = filteredData.map(sample=>sample.otu_ids)
    console.log(filter)
    })}
    Init()
// handling change
// d3.selectAll("#selDataset").on("change", getData )
function getData(){
var dropdownMenu = d3.select("#selDataset");
var dataset = dropdownMenu.property("value");



}


    
