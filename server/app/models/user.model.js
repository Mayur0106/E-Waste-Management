module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        // id: {
        //     type: Sequelize.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        profileImage: {
            type: Sequelize.STRING
        },
        userName: {
            type: Sequelize.STRING
        },
        fullName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        // role: {
        //     type: Sequelize.STRING
        // },
        // status: {
        //     type: Sequelize.STRING
        // },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        deletedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return User;
};