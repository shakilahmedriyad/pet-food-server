import axios from "axios";
import { Request, Response } from "express";

export async function getResult(req: Request, res: Response) {
  try {
    const { semesterId, studentId } = req.query;
    if (!semesterId || !studentId) {
      return res.status(400).json({ error: "Missing semesterId or studentId" });
    }
    const url = `http://peoplepulse.diu.edu.bd:8189/result?grecaptcha=&semesterId=${semesterId}&studentId=${studentId}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch result" });
  }
}
