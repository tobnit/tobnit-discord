import { Schema } from "mongoose";
import { Joke } from "#shared/interfaces";

export const JokeSchema = new Schema<Joke>({
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
