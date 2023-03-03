const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuOQFxVn4v4eNS5ddiIrCEBK9E36wUQFEkw&usqp=CAU",
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lifeTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdInDB: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull:false
      }
    },
    {
      timestamps: false,
    }
  );
};
