var fs = require('fs');
var a ="./"+process.argv[2]+".txt";
console.log(a);
if(fs.existsSync(a)){
    console.log("file exists");
}
else{
    fs.writeFile(process.argv[2]+".txt","you are awesome",(err,data)=>{
        if(err) console.error(err);
        else console.log("file created successfully");
    });
}