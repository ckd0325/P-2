const { Sequelize, DataTypes } = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        user_pw: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    }, {
        timestamps: true
    });
}