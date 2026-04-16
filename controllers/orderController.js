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

exports.cancelMyOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { status: "Cancelled" },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order cancelled", order });
  } catch (error) {
    console.log("CANCEL ORDER ERROR:", error);
    res.status(500).json(error);
  }
};