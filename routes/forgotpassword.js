const express=require('express')
const router=express.Router()
const path=require('path')
const bodyParser=require('body-parser')
router.use(express.json());
const cors=require('cors');
router.use(cors())
router.use(express.static(path.join(__dirname,'public')))
router.use(express.static(path.join(__dirname, '..', 'views')));
router.use(bodyParser.urlencoded({extended:false}))

router.post('/forgotpassword',(req,res)=>{
    console.log(req.body.email)    
});

module.exports = router;
  

