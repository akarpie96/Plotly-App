var dropdown = d3.select("#selDataset");

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

//getting Demographic data
var filteredDemo=data.metadata.filter(meta=>meta.id.toString() === selection)
console.log(filteredDemo)
//Creating list
var list = d3.select("#sample-metadata")
list.html("")
list.append("h5").text(`ID: ${selection}`)
list.append("h5").text(`Gender:${filteredDemo[0].gender}`);
list.append("h5").text(`Ethnicity:${filteredDemo[0].ethnicity} `);
list.append("h5").text(`Age:${filteredDemo[0].age} `);
list.append("h5").text(`Location:${filteredDemo[0].location} `);
list.append("h5").text(`bbtype:${filteredDemo[0].bbtype}`);
list.append("h5").text(`wfreq: ${filteredDemo[0].wfreq}`);


//Getting otu IDS 
var filteredData= data.samples.filter(id => id.id === selection)
console.log(filteredData)

var filteredID = filteredData.map(id=>id.otu_ids)
console.log(filteredID)

//Getting sample values

var filteredSample = filteredData.map(sample=>sample.sample_values)
console.log(filteredSample)

// Slicing 10 values from arrays
var slicedID = filteredID[0].slice(0,10).reverse()
var labels = slicedID.map(d=>"OTU " + d)
console.log(labels)
var slicedSample = filteredSample[0].slice(0,10).reverse()
console.log(slicedID)
console.log(slicedSample)

var trace1={
    x: slicedSample,
    y: labels, 
    text: slicedID, 
    type: "bar",
    orientation: "h"
};


var data = [trace1];

var layout = {
    title: "Top 10 OTU ID's", 
    margin: {
        l:100,
        r:100,
        t:30,
        b:20
    }
}



Plotly.newPlot("bar", data,layout)


// Bubble Chart 
var trace2 = {
    x: labels,
    y: slicedSample,
    mode: 'markers',
    marker: {
      size: slicedSample,
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)']
    }
  };
  
  var data1 = [trace2];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data1, layout);

})}

getData()