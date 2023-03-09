export const weightInputHandler = (input) => {
  const weight = input
    .split("-")
    .map((e) => e.trim())
    .map((e) => `${e}Kg`)
    .join(" - ");
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
