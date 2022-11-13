const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "alumno",
    {
      id: {
        type: DataTypes.UUID, // clave aleatoria unica
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      apellido: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      localidad: {
        type: DataTypes.STRING,
      },
      horas_disponibles: {
        type: DataTypes.INTEGER,
      },
      objetivo: {
        type: DataTypes.INTEGER,
      },
      categoria: {
        type: DataTypes.INTEGER,
      },
      gimnasio: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
