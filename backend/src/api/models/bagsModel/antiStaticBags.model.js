import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const antiStaticBagsSchema = new Schema({
  productNumber: String,
  durability: String,
  size: String,
  weight: String,
  bagPercase: String
});

export default mongoose.model('AntiStaticBags', antiStaticBagsSchema);
