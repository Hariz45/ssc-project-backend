// const mongoose=require("mongoose")

// const orderSchema=new mongoose.Schema({
//     UserId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     items:[
//         {
//             menuId:{
//                 type:mongoose.Schema.Types.ObjectId,
//                 ref:"Menu"
//             },
//             quantity:Number
//         }
//     ],
//     totalPrice:Number,
//     status:{
//         type:String,
//         default:"pending"
//     }
// },{timestamps:true})

// module.exports=mongoose.model("Order",orderSchema);
 const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        menuId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
        },
        quantity: Number,
      },
    ],
    totalPrice: Number,
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);