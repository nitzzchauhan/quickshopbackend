var express = require('express');
var router = express.Router();
var pool = require('./pool');
var multer = require('./multer');

router.post('/categorysubmit', upload.single('icon'), function (req, res, next) {
    try {
        pool.query("insert from category(categoryname,status,icon)", [req.body.categoryname, req.body.status, req.file.originalfile], function (error, submit) {
            if (error) {
                return res.status(200).json({status:true,message:'Error due to database.......'})  
            }
            else {
                return res.status(200).json({status:true,message:'Category Submitted Successfully.......'})  
            }
    })}
    
    
  catch (e) {

    return res.status(200).json({status:false,message:'Server is not responding please contact administrator.......'})  
}
});

module.exports = router;
