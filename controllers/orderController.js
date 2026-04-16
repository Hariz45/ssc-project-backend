// const Order = require("../models/order");



// exports.createOrder = async (req, res) => {
//   try {
//     const { items, totalPrice } = req.body;

//     const order = await Order.create({
//       UserId: req.user.id,
//       items,
//       totalPrice
//     });

//     res.json({ message: "Order placed", order });
//     console.log("CREATE ORDER req.user:", req.user);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };



// exports.getMyOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ UserId: req.user.id })
//       .populate("items.menuId");

//     res.json(orders);
//     console.log("GET MY ORDERS req.user:", req.user);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };



// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("UserId")
//       .populate("items.menuId");

//     res.json(orders);

//   } catch (error) {
//     res.status(500).json(error);
//   }
// };



// exports.updateStatus = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const order = await Order.findByIdAndUpdate(
//       id,
//       { status: req.body.status },
//       { new: true }
//     );

//     res.json({ message: "Status updated", order });

//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    console.log("CREATE ORDER req.user:", req.user);
    console.log("CREATE ORDER req.user.id:", req.user?.id);

    const order = await Order.create({
      userId: req.user.id,
      items,
      totalPrice,
    });

    res.json({ message: "Order placed", order });
  } catch (error) {
    console.log("CREATE ORDER ERROR:", error);
    res.status(500).json(error);
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    console.log("GET MY ORDERS req.user:", req.user);
    console.log("GET MY ORDERS req.user.id:", req.user?.id);

    const orders = await Order.find({ userId: req.user.id })
      .populate("items.menuId");

    res.json(orders);
  } catch (error) {
    console.log("GET MY ORDERS ERROR:", error);
    res.status(500).json(error);
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("items.menuId");

    res.json(orders);
  } catch (error) {
    console.log("GET ALL ORDERS ERROR:", error);
    res.status(500).json(error);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true }
    );

    res.json({ message: "Status updated", order });
  } catch (error) {
    console.log("UPDATE STATUS ERROR:", error);
    res.status(500).json(error);
  }
};