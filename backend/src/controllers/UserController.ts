import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Gus Prado", email: "gus@gusprado.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "me", email: "me@email.com" },
      message: {
        subject: "Welcome",
        body: "Welcome to the system",
      },
    });

    return res.send();
  },
};
