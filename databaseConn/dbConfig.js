/**
 * Created by Adnan Ayoub
 */
const Sequelize = require('sequelize')

let conn = {
    database: "nodedb",
    username: "root",
    password: "",
    host: "localhost",
    port     :  3307
}

const sequelize = new Sequelize(conn.database, conn.username, conn.password, {
    /* Optional Params
     timezone: '+05:30',
     */
    port: 3307,
    host: conn.host,
    dialect: 'mysql',
    timezone: '+05:30',
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        idle: 20000
    },
    define: {
        freezeTableName: true
    }
})

sequelize.sync({
    force: false
})

module.exports = sequelize