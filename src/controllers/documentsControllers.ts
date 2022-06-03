import { Request, Response } from "express";
import documentservice from "../services/documentService";

export class DocumentsController {
  async getActivitiesActives(req: Request, res: Response): Promise<Response> {

    try {
      const activities = await documentservice.requestActivitiesRegistered();

      return res.json(activities);
    } catch (error) {
      return res
        .status(404)
        .json({ message: "getUrlDocument not found " + error });
    }
  }


}
