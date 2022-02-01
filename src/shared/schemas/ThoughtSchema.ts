import { Schema } from "mongoose";
import { Thought } from "#shared/interfaces";

export const ThoughtSchema = new Schema<Thought>({
  message: { type: String, required: true },
  author: { type: String, required: true },
  status: {
    type: Boolean,
    required: false,
    default: false,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});
