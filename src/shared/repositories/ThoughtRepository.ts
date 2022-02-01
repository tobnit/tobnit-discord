import { model } from "mongoose";

import { Thought } from "@shared/interfaces";
import { ThoughtSchema } from "@shared/schemas";

export class ThoughtRepository {
  private ThoughtModel = model<Thought>("Thought", ThoughtSchema);

  public async getAll(): Promise<Thought[]> {
    return this.ThoughtModel.find({ status: true }).exec();
  }

  public async create(thought: Thought): Promise<Thought> {
    return this.ThoughtModel.create(thought);
  }
}
