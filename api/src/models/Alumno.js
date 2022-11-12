const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "alumno",
    {
      id: {
        type: DataTypes.UUID, // clave aleatoria unica
        primaryKey: true,
        allowNull: false, // CAMPO OBLIGATORIO
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      horas_disponibles: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      objetivo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gimnasio: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
