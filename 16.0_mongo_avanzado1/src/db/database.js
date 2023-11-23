import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://Admin:ZdRuigFhu0ThXAkc@coder.9avecvk.mongodb.net/coder47345?retryWrites=true&w=majority";

try {
  await mongoose.connect(connectionString);
  console.log("Conectado a la base de datos de MongoDB");
} catch (error) {
  console.log(`ERROR => ${error}`);
}
