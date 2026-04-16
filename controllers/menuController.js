const Menu = require("../models/menu")

exports.addMenu = async (req, res) => {
    try {
        const { name, category, price, description, image } = req.body

        const menu = await Menu.create({
            name,
            category,
            price,
            description,
            image
        })
        res.json({ message: "Menu created successfully", menu })
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getMenu = async (req, res) => {
    try {
        const menu = await Menu.find();
        res.json(menu)
    }catch(error){
        res.status(500).json(error)
    }
}

exports.updateMenu=async(req,res)=>{
    try{
        const{id}=req.params;

        const updatedmenu= await Menu.findByIdAndUpdate(id,req.body,{new:true})
        res.json({message:"Menu updated ",updatedmenu})

    }catch(error){
        res.status(500).json(error)
    }
}

exports.deleteMenu=async(req,res)=>{
    try{
        const{id}=req.params

        const deletedmenu=await Menu.findByIdAndDelete(id)

        res.json({message:"Menu deleted",deletedmenu})
    }catch(error){
        res.status(500).json(error)
    }
}