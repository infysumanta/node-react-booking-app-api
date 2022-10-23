const express = require("express");
const Hotel = require("../models/Hotel");

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndUpdate(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GETALL
router.get("/", async (req, res, next) => {
  try {
    const hotel = await Hotel.find();
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
