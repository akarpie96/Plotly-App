
// 
// d3.selectAll("#selDataset").on("change", getData )

function getplotdata(){
    var dropdown = d3.select("#selDataset");
    d3.json("samples.json").then((data)=> {
            console.log(data)

    var names = data.names
    console.log(names)
 
    names.forEach(function(name) {
        dropdown.append("option").text(name).property("value")});   
    })}
    
    getplotdata()