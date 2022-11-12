const { DataTypes } = require("sequelize");
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // define activity model

  // Required properties
  sequelize.define(
    "entrenamiento",
    {
      Lunes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      Martes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      Miercoles: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      Jueves: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      Viernes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      Sabado: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      Domingo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },

    {
      createdAt: false,
      updatedAt: false,
    }
  );
};

/*


*/
