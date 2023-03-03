const { Router } = require("express");
const router = Router();

const { Temperament } = require("../db");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    let apiInfo = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((r) => r.data);

    let temp = apiInfo
      .map((e) => e.temperament)
      .join()
      .split(",")
      .map((e) => e.trim());

    await temp.map(async (e) => {
      if (e.length > 0) {
        await Temperament.findOrCreate({
          where: {
            name: e,
          },
        });
      }
    });

    let temperaments = await Temperament.findAll();

    res.json(temperaments);
  } catch (error) {
    res
      .status(404)
      .json({ message: "something went wrong getting temperament", error });
  }
});

module.exports = router;
