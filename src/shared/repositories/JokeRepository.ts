import { model } from "mongoose";

import { Joke } from "#shared/interfaces";
import { JokeSchema } from "#shared/schemas";

export class JokeRepository {
  private JokeModel = model<Joke>("Joke", JokeSchema);

  public async getAll(): Promise<Joke[]> {
    return this.JokeModel.find({ status: true }).exec();
  }

  public async create(joke: Joke): Promise<Joke> {
    return this.JokeModel.create(joke);
  }
}
