const Sequelize = require("sequelize");
const _sequelize = require('../../databaseConn/dbConfig')

const stateDistrict = _sequelize.define('state_and_district', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    state: Sequelize.STRING,
    district: Sequelize.STRING

})
module.exports = stateDistrict