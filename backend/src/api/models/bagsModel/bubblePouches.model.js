import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bubblePouchesSchema = new Schema({
  regularNumber: String,
  antiStaticNumber: String,
  size: String,
  bagPercase: String
});

export default mongoose.model('BubblePouches', bubblePouchesSchema);
