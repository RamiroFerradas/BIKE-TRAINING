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
        type: DataTypes.JSONB,
      },
      Martes: {
        type: DataTypes.JSONB,
      },
      Miercoles: {
        type: DataTypes.JSONB,
      },
      Jueves: {
        type: DataTypes.JSONB,
      },
      Viernes: {
        type: DataTypes.JSONB,
      },
      Sabado: {
        type: DataTypes.JSONB,
      },
      Domingo: {
        type: DataTypes.JSONB,
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
