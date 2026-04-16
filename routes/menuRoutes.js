const router=require("express").Router()

const {addMenu,getMenu,updateMenu,deleteMenu}=require("../controllers/menuController")

router.post("/",addMenu)
router.get("/",getMenu)
router.put("/:id",updateMenu)
router.delete("/:id",deleteMenu)

module.exports=router