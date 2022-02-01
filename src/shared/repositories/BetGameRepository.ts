import { model } from "mongoose";

import { BetGame } from "#shared/interfaces";
import { BetGameSchema } from "#shared/schemas";

export class BetGameRepository {
  private BetGameModel = model<BetGame>("BetGame", BetGameSchema);

  public async findOneByCode(pollCode: string): Promise<BetGame> {
    return this.BetGameModel.findOne({ pollCode }).exec();
  }

  public async create(betGame: BetGame): Promise<BetGame> {
    return this.BetGameModel.create(betGame);
  }

  public async updateByCode(pollCode: string, betGame: BetGame): Promise<void> {
    this.BetGameModel.findOneAndUpdate(
      {
        pollCode,
      },
      betGame
    ).exec();
  }

  public async deleteByCode(pollCode: string): Promise<void> {
    this.BetGameModel.findOneAndDelete({ pollCode }).exec();
  }

  public async findAll(): Promise<BetGame[]> {
    return this.BetGameModel.find().exec();
  }
}
