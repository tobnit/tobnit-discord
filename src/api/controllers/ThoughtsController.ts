import { ThoughtRepository } from "#shared/repositories";
import { Request, Response } from "express";

export class ThoughtsController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const thoughtsRepository = new ThoughtRepository();
    const { id } = req.params;
    const { status } = req.query;

    const joke = await thoughtsRepository.find({
      thoughtId: id,
      status: status as unknown as boolean,
    });

    return res.json(joke);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const thoughtsRepository = new ThoughtRepository();
    await thoughtsRepository.create(req.body);

    return res.json({
      message: "Thought created successfully",
    });
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const thoughtsRepository = new ThoughtRepository();
    const joke = await thoughtsRepository.update(id, req.body);

    if (joke) {
      return res.json({
        message: "Thought updated successfully",
      });
    }

    return res.json({
      message: "Thought not found",
    });
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const thoughtsRepository = new ThoughtRepository();
    const joke = await thoughtsRepository.delete(id);

    if (joke) {
      return res.json({
        message: "Thought deleted successfully",
      });
    }

    return res.json({
      message: "Thought not found",
    });
  }
}
