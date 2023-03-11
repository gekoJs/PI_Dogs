const { Router } = require("express");
const router = Router();

const { getAllInfo } = require("../controllers/gettingAllInfo");
const { Dog, Temperament } = require("../db");

router.get("/", async (req, res) => {
  let { name } = req.query;

  let allInfo = await getAllInfo();

  try {
    if (name) {
      let dogByName = allInfo.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      if (dogByName.length > 0) {
        return res.send(dogByName);
      }
      throw Error("Sorry, we couldn't find your dog :c")
    }
    res.json(allInfo);
  } catch (error) {
    res
      .status(404)
      .send({ message: error.message});
  }
});

router.get("/:idRaza", async (req, res) => {
  let { idRaza } = req.params;
  try {
    let dogs = await getAllInfo();
    let filtered = dogs.filter((e) => e.id == idRaza);
    if(!filtered.length) throw Error("Sorry, we couldnt find details of the dog :c")
    res.send(filtered);
  } catch (error) {
    res
      .status(404)
      .send({ message: error.message});
  }
});

router.post("/", async (req, res) => {
  let { name, image, height, weight, lifeTime, temperament } = req.body;

  try {
    const [instance, created] = await Dog.findOrCreate({
      where: {
        name,
      },
      defaults: {
        name,
        image,
        height,
        weight,
        lifeTime,
      },
    });

    let dogTemp = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });
    instance.addTemperaments(dogTemp);

    if (created) return res.json({ message: "Dog created :D", instance });
    else throw Error("Dog already exists")

  } catch (error) {
    res
      .status(404)
      .send({ message: error.message});
  }
});

module.exports = router;
