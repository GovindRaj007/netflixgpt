import { GEMINI_AI_KEY } from '../utils/constants';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = GEMINI_AI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });




