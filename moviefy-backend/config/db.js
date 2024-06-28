import mongoose from "mongoose";

const mongoURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@moviefy.vnpb69j.mongodb.net/Moviefy?retryWrites=true&w=majority&appName=Moviefy`;

const initDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
};

export default initDB;
