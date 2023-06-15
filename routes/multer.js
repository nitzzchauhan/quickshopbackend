var multer=require('multer')
import { v4 as uuidv4 } from 'uuid';

var storage=multer.diskStorage({
destination:(req,file,path)=>
{path(null,'public/images')}
,
filename:(req,file,path)=>{
   
 path(null,file.uuidv4())}
 });
 
var upload=multer({storage:storage})
module.exports=upload;

