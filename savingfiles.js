var fs=require('fs');
var a=process.argv[2];
fs.appendFile("myfiles.txt",a,(err,res)=>{
if(err) console.error(err);
else console.log("file updated successfully");
});
