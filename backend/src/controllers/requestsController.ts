import type { Request, Response } from "express";
import { z } from "zod";
import { createRequest } from "../services/requestService.js";

const createRequestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  contactMethod: z.enum(["EMAIL", "PHONE", "WHATSAPP"]),
  message: z.string().optional(),
  serviceId: z.number().int().positive(),
});

export const handleCreateRequest = async (req: Request, res: Response) => {
  const parsed = createRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }

  try {
    const created = await createRequest(parsed.data);
    return res.status(201).json({ id: created.id });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ error: "Could not create request" });
  }
};
