require("dotenv").config();
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  PORT,
  DB_NAME_DEP,
  DB_HOST_DEP,
  DB_USER_DEP,
  DB_PASSWORD_DEP,
} = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME_DEP,
        dialect: "postgres",
        host: DB_HOST_DEP,
        port: 5432,
        username: DB_USER_DEP,
        password: DB_PASSWORD_DEP,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false,
          native: false,
        }
      );

sequelize.sync().then(
  () => {
    console.log("DB connection sucessful.");
  },
  (err) => {
    // catch error here
    console.log(err, "ERROR DB");
  }
);

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Usuario, Entrenamiento } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Usuario.belongsToMany(Entrenamiento, { through: "alumnos_entrenamientos" });
Entrenamiento.belongsToMany(Usuario, { through: "alumnos_entrenamientos" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
