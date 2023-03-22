import mongoose from "mongoose";

const { Schema } = mongoose;

const breedSchema = new Schema({
  breed: { type: String, required: true },
});

const Breed = mongoose.models.Breed || mongoose.model("Breed", breedSchema);

export default Breed;
