module.exports = (sequelize, Sequelize) => {
    const Collector = sequelize.define("collectors", {
        centerName: {
            type: Sequelize.STRING
        },
        contactPerson: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        operatingHours: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.STRING
        },
        longitude: {
            type: Sequelize.STRING
        },
        acceptedItems: {
            type: Sequelize.STRING
        },
        serviceOffered: {
            type: Sequelize.STRING
        },
        images: {
            type: Sequelize.STRING
        },
    });

    return Collector;
};