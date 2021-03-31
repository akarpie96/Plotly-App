function getplotdata(){
    d3.json("samples.json").then((data)=> {
            console.log(data)
    })}
    
    getplotdata()