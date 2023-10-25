const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT || 'postgres',
    });


const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

testDbConnection();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model.js')(sequelize, Sequelize);   // user model

module.exports = db;