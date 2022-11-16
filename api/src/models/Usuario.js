const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "usuario",
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
        type: DataTypes.STRING,
      },
      categoria: {
        type: DataTypes.STRING,
      },
      gimnasio: {
        type: DataTypes.BOOLEAN,
      },
      administrador: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      entrenador: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      alumno: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
