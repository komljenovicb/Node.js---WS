import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Restoran } from "../entity/Restoran";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        res.json(await getRepository(Restoran).find());
    } catch(e) {
        res.json({error: e.message});
    }
});

export default router;