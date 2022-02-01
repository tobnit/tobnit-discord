import { model } from "mongoose";

import { User } from "@shared/interfaces";
import { UserSchema } from "@shared/schemas";

export class UserRepository {
  private UserModel = model<User>("User", UserSchema);

  public async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  public async findOneById(id: string): Promise<User> {
    return this.UserModel.findOne({ id });
  }

  public async create(user: User): Promise<User> {
    return this.UserModel.create(user);
  }

  public async update(user: User): Promise<void> {
    await this.UserModel.updateOne({ id: user.id }, user);
  }

  public async delete(userId: string): Promise<void> {
    await this.UserModel.deleteOne({ id: userId });
  }
}
