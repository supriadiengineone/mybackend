const express = require('express');

const app = express();

const PORT = 3030;

app.get('/', function(req, res){
    res.send('halo supri ganteng')
})


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully Running, and App is listening on part "+ PORT)
    else
    console.log("error", error);
}
)