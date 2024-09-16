import express from "express";
import Cart from "../models/cart.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newItems = await Cart.insertMany(req.body);
    res.status(201).json(newItems);
  } catch (err) {
    console.error("Failed to add items", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (err) {
    console.error("Failed to fetch items", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
    if (!item) return res.status(404).send("Item not found");
    res.status(200).json(item);
  } catch (err) {
    console.error("Failed to fetch item", err);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404).send("Item not found");
    res.status(200).json(item);
  } catch (err) {
    console.error("Failed to update item", err);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send("Item not found");
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    console.error("Failed to delete item", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
