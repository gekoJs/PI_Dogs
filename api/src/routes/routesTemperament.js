const { Router } = require("express");
const router = Router();

const { Temperament } = require("../db");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    let apiInfo = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((r) => r.data)
      .catch((err) => {
        throw Error(
          "Something went wrong tryng to get temperaments from the api :c"
        );
      });

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

    res.send(temperaments);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

module.exports = router;
