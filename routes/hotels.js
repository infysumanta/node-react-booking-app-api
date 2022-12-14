const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotelController");

const router = express.Router();
const verifyAdmin = require("./../middleware/verifyAdmin");
//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getHotels);
module.exports = router;
