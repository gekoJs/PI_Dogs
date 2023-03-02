const { Router } = require("express");
const router = Router();

const { getAllInfo } = require("../controllers/gettingAllInfo");
const { Dog } = require("../db");

router.get("/", async (req, res) => {
  let allInfo = await getAllInfo();

  try {
    res.json(allInfo);
  } catch (error) {
    res.status(404).send({ error: "Something went wrong getting data :c" });
  }
});

module.exports = router;
