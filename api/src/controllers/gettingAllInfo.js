const axios = require("axios");

const { Dog, Temperament } = require("../db");

const getApiInfo = async () => {
  try {
    const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds");
    return apiInfo.data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        image: e.image,
        temperament: e.temperament,
        height: e.height.metric,
        weight: e.weight.metric.split("-").map(e=>parseInt(e)),
        createdInDB: false,
        lifeTime: e.life_span,
      };
    });
  } catch (error) {
    console.log(error.message)
    return {
      error: `Something went wrong getting the Dogs Api - ${error}`,
    };
  }
};

const getDBInfo = async () => {
  try {
    const DBinfo = await Dog.findAll({
      include: {
        model: Temperament,
      },
    });
    const finalInf = DBinfo.map((e) => {
      return {
        id: e.id,
        name: e.name,
        image: e.image,
        height: e.height,
        weight: e.weight,
        lifeTime: e.lifeTime,
        createdInDB: e.createdInDB,
        temperament: e.temperaments.map((i) => i.name).join(", "),
      };
    });
    return finalInf;
  } catch (error) {
    return {
      error: `Something went wrong getting the Dogs Api - ${error}`,
    };
  }
};

const getAllInfo = async () => {
  
  let apiInfo = await getApiInfo();
  let DBInfo = await getDBInfo();

  if (apiInfo.error) {
    console.log(apiInfo.error);
    return DBInfo;
  }
  if (DBInfo.error) {
    console.log(DBInfo);
    return apiInfo;
  }

  return apiInfo.concat(DBInfo);
};

module.exports = { getAllInfo };
