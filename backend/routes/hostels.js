const express = require("express");
const router = express.Router();

const { getAllhostels, addHostel, deleteHostel, addHostelPage } = require("../controllers/hostelcontrollers.js");

router.get("/addhostel", addHostelPage);
router.post("/addhostel", addHostel);
router.get("/hostels", getAllhostels); // Changed route path to '/hostels'
router.delete("/delhostel/:id", deleteHostel);

module.exports = router;
