const router = require("express").Router();
const auth = require("../Middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateStatus,
  cancelMyOrder
} = require("../controllers/orderController");


router.get("/test", (req, res) => {
  console.log("order test route hit");
  res.json({ message: "order route working" });
});


// user
router.post("/", auth, createOrder);
router.get("/my", auth, getMyOrders);
router.put("/cancel/:id", auth, cancelMyOrder);

// admin
router.get("/", auth, getAllOrders);
router.put("/:id", auth, updateStatus);

module.exports = router;