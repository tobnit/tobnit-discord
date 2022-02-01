import { model } from "mongoose";

import { Joke } from "#shared/interfaces";
import { JokeSchema } from "#shared/schemas";

type FindProps = {
  jokeId?: string;
  status?: boolean;
};

export class JokeRepository {
  private JokeModel = model<Joke>("Joke", JokeSchema);

  public async getAll(): Promise<Joke[]> {
    return this.JokeModel.find({ status: true }).exec();
  }

  public async create(joke: Joke): Promise<Joke> {
    return this.JokeModel.create(joke);
  }

  public async find({ jokeId, status }: FindProps): Promise<Joke[]> {
    if (jokeId && status) {
      return this.JokeModel.find({ _id: jokeId, status }).exec();
    }

    if (jokeId) {
      return this.JokeModel.find({ _id: jokeId }).exec();
    }

    if (status) {
      return this.JokeModel.find({ status }).exec();
    }

    return this.JokeModel.find().exec();
  }

  public async update(jokeId: string, joke: Joke): Promise<Joke> {
    return this.JokeModel.findByIdAndUpdate(jokeId, joke);
  }

  public async delete(jokeId: string): Promise<Joke> {
    return this.JokeModel.findByIdAndDelete(jokeId);
  }
}
