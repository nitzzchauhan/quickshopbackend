var mysql=require('mysql')

var pool=mysql.createPool({
 host:'localhost',
 port:3306,
 user:'root1',
 password:'1234',
 database:'quickshop',
 multipleStatements:true,
 connectionLimit:100
})
module.exports=pool