import { model } from "mongoose";

import { Thought } from "#shared/interfaces";
import { ThoughtSchema } from "#shared/schemas";

type FindProps = {
  thoughtId?: string;
  status?: boolean;
};

export class ThoughtRepository {
  private ThoughtModel = model<Thought>("Thought", ThoughtSchema);

  public async getAll(): Promise<Thought[]> {
    return this.ThoughtModel.find({ status: true }).exec();
  }

  public async create(thought: Thought): Promise<Thought> {
    return this.ThoughtModel.create(thought);
  }

  public async find({ thoughtId, status }: FindProps): Promise<Thought[]> {
    if (thoughtId && status) {
      return this.ThoughtModel.find({ _id: thoughtId, status }).exec();
    }

    if (thoughtId) {
      return this.ThoughtModel.find({ _id: thoughtId }).exec();
    }

    if (status) {
      return this.ThoughtModel.find({ status }).exec();
    }

    return this.ThoughtModel.find().exec();
  }

  public async update(thoughtId: string, thought: Thought): Promise<Thought> {
    return this.ThoughtModel.findByIdAndUpdate(thoughtId, thought);
  }

  public async delete(thoughtId: string): Promise<Thought> {
    return this.ThoughtModel.findByIdAndDelete(thoughtId);
  }
}
