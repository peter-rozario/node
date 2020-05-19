var file = require('fs');
var yargs = require('yargs');
file.writeFile("mytext.txt"," my sample file created",(err,data)=>{
if(err) console.error(err);
else{
    console.log("file created successfully");
}
});

