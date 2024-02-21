const express = require("express");
const verifyToken = require("../middleware/verify.js");

const {
  getAllMenu,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/MenuController.js");

const menuRouter = express.Router();

menuRouter.get("/menu", getAllMenu);
menuRouter.get("/menu/:id", getMenuById);
menuRouter.post("/menu/", verifyToken, createMenu);
menuRouter.put("/menu/:id", verifyToken, updateMenu);
menuRouter.delete("/menu/:id", verifyToken, deleteMenu);

module.exports = menuRouter;
