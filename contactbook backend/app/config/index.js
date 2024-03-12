const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    db: {
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CK22V7K545_DANGHOANGDUNG_BACKEND2"
    },
};

module.exports = config;
