const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fhir_node_template', 'user', 'password', {
   host: 'localhost',
   dialect: 'postgres'
});

const Patient = sequelize.define('Patient', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { sequelize, Patient };
