import { JokeRepository } from "#shared/repositories";
import { Request, Response } from "express";

export class JokesController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const jokesRepository = new JokeRepository();
    const { id } = req.params;
    const { status } = req.query;

    const joke = await jokesRepository.find({
      jokeId: id,
      status: status as unknown as boolean,
    });

    return res.json(joke);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const jokesRepository = new JokeRepository();
    await jokesRepository.create(req.body);

    return res.json({
      message: "Joke created successfully",
    });
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const jokesRepository = new JokeRepository();
    const joke = await jokesRepository.update(id, req.body);

    if (joke) {
      return res.json({
        message: "Joke updated successfully",
      });
    }

    return res.json({
      message: "Joke not found",
    });
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const jokesRepository = new JokeRepository();
    const joke = await jokesRepository.delete(id);

    if (joke) {
      return res.json({
        message: "Joke deleted successfully",
      });
    }

    return res.json({
      message: "Joke not found",
    });
  }
}
