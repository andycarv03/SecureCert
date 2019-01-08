const express = require('express');
const app = express();
const bodyparser=require('body-parser');


const port = 3000
app.use(bodyparser.urlencoded({extended:false}));
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
app.post('/api/data',(req,res)=>{
    response={
    uName : req.body.id1,
    pwd : req.body.id2,
    };
    module.exports=response;
    var callfile=require('./nodetobc');
    res.end(JSON.stringify(response));
   
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
