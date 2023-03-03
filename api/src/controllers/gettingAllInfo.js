const axios = require("axios");

const { Dog, Temperament } = require("../db");

const getApiInfo = async () => {
  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds");
  const info = await apiInfo.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      temperament: e.temperament,
      height: e.height.metric,
      weight: e.weight.metric,
      lifetime: e.life_span,
    };
  });
  return info;
};

const getDBInfo = async () => {
  const DBinfo = await Dog.findAll({
    include: {
      model:Temperament
    }
  });
  const finalInf = DBinfo.map(e=>{
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      height: e.height,
      weight: e.weight,
      lifetime: e.lifeTime,
      createdinDB: e.createdinDB,
      temperament: e.temperaments.map(i=>i.name).join(", ")
    }
  })
  return finalInf;
};

const getAllInfo = async () => {
  let apiInfo = await getApiInfo();
  let DBInfo = await getDBInfo()
  return apiInfo.concat(DBInfo)
};

module.exports = { getAllInfo };
