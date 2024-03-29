import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    author: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    rank: { type: Number, required: true },
    state: { type: String, required: true, enum: ["Open", "Closed", "Saved"] }
  },
  {
    timestamps: true
  }
)

export default mongoose.model("TaskModel", taskSchema);