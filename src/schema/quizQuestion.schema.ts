import { z } from "zod";

import { imageItemSchema, textItemSchema } from "./imageTextItems.schema";
import {
  matchSchema,
  multipleChoiceSchema,
  orderSchema,
  shortAnswerSchema,
} from "./quizAnswers.schema";

export const quizQuestionSchema = z.object({
  question_id: z.number(),
  question_uid: z.string(),
  question_type: z.string(),
  question_stem: z
    .array(z.union([textItemSchema, imageItemSchema]))
    .optional()
    .nullable(),
  answers: z
    .object({
      "multiple-choice": z.array(multipleChoiceSchema).optional(),
      "short-answer": z.array(shortAnswerSchema).optional(),
      order: z.array(orderSchema).optional(),
      match: z.array(matchSchema).optional(),
    })
    .optional()
    .nullable(),
  feedback: z.string().optional().nullable(),
  hint: z.string().optional().nullable(),
  active: z.boolean().optional(),
  order: z.number(),
});

export type QuizQuestion = z.infer<typeof quizQuestionSchema>;
