const axios = require("axios");

const { Dog } = require("../db");

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
  const DBinfo = await Dog.findAll();
  return DBinfo;
};

const getAllInfo = async () => {
  let apiInfo = await getApiInfo();
  let DBInfo = await getDBInfo()
  return apiInfo.concat(DBInfo)
};

module.exports = { getAllInfo };
