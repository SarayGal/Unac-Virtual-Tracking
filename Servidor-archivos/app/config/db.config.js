module.exports = {
  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "b49b32df6c06f5",
  PASSWORD: "808d0428",
  DB: "heroku_8287ccc07a63f77",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
