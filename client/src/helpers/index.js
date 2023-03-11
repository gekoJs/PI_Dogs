export const weightInputHandler = (input) => {
  const weight = input.map((e) => `${e}Kg`).join(" - ");
  return weight;
};
export const heightInputHandler = (input) => {
  const height = input
    .split("-")
    .map((e) => e.trim())
    .map((e) => `${e}Cm`)
    .join(" - ");
  return height;
};

export const temperamentInputHandler = (input) => {
  if (!input) return null;
  if (input.length > 20) {
    const nombre = input.split("").splice(0, 20);
    nombre.push("...");
    return nombre.join("");
  }
  return input;
};

export const inputHandler = (input) => {
  if (!input) return null;
  if (input.length > 15) {
    const nombre = input.split("").splice(0, 15);
    nombre.push("...");
    return nombre.join("");
  }
  return input;
};


export const validate = (input) => {
  let err = {};

  if (!input.name) err.name = "Name is required";
  else if (!/^[a-zA-Z]*$/.test(input.name))
    err.name = "The name can not contain numbers or special caracters";

  if (!input.min_height) err.min_height = "Minimum height is required";
  else if (!/^[0-9]*$/.test(input.min_height))
    err.min_height = "It must be only numbers";
  else if (parseInt(input.min_height) <= 2)
    err.min_height = "So... your dog is an atom? put a greater number";

  if (!input.max_height) err.max_height = "Maximum height is required";
  else if (!/^[0-9]*$/.test(input.max_height))
    err.max_height = "It must be only numbers";
  else if (parseInt(input.max_height) >= 200)
    err.max_height = "Seriusly? put a lower height";

  if (!input.min_weight) err.min_weight = "Minimum weight is required";
  else if (!/^[0-9]*$/.test(input.min_weight))
    err.min_weight = "It must be only numbers";
  else if (parseInt(input.min_weight) <= 1)
    err.min_weight = "You can't be serious... write a higher number";

  if (!input.max_weight) err.max_weight = "Maximum weight is required";
  else if (!/^[0-9]*$/.test(input.max_weight))
    err.max_weight = "It must be only numbers";
  else if (parseInt(input.max_weight) >= 200)
    err.max_weight = "its a dog not a whale... lower de weight!!!";

  if (!input.min_lifeTime) err.min_lifeTime = "Minimum Life time is required";
  else if (!/^[0-9]*$/.test(input.min_lifeTime))
    err.min_lifeTime = "It must be only numbers";
  else if (parseInt(input.max_lifeTime) === parseInt(input.min_lifeTime))
    err.min_lifeTime =
      "the minimum life time cannot be equal than maximum life time";
  else if (parseInt(input.min_lifeTime) > parseInt(input.max_lifeTime))
    err.min_lifeTime =
      "the minimum life time cannot be greater than maximum life time";

  if (!input.max_lifeTime) err.max_lifeTime = "Maximum Life time is required";
  else if (!/^[0-9]*$/.test(input.max_lifeTime))
    err.max_lifeTime = "It must be only numbers";
  else if (parseInt(input.max_lifeTime) === parseInt(input.min_lifeTime))
    err.max_lifeTime =
      "the maximum life time cannot be equal than minimum life time";
  else if (parseInt(input.max_lifeTime) < parseInt(input.min_lifeTime))
    err.max_lifeTime =
      "the maximum life time cannot be lesser than minimum life time";

  if (!input.temperaments.length) err.temperaments = "Temperaments is required";
  
  return err;
};