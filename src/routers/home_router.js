
const router=require("express").Router();
const home_controller=require("../controllers/home_controller");
const multerConfig=require("../config/multer_config");

router.get("/",home_controller.get_home_page);

router.post("/upload",multerConfig.single('image'),home_controller.post_upload);


module.exports=router;