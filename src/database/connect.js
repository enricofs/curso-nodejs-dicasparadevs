const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.gqgduvn.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro ao conectar com o BD: ", error);
      }

      return console.log("conectado bd com sucesso");
    }
  );
};

module.exports = connectToDatabase;
