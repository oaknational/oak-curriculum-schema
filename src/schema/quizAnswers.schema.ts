import { z } from "zod";
import { imageItemSchema, textItemSchema } from "./imageTextItems.schema";

export const multipleChoiceSchema = z.object({
  answer: z.array(z.union([textItemSchema, imageItemSchema]).optional()),
  answer_is_active: z.boolean().optional(),
  answer_is_correct: z.boolean().optional(),
});

export type MultipleChoice = z.infer<typeof multipleChoiceSchema>;

export const shortAnswerSchema = z.object({
  answer: z.array(z.union([textItemSchema, imageItemSchema]).optional()),
  answer_is_active: z.boolean().optional(),
  answer_is_default: z.boolean().optional(),
});

export type ShortAnswer = z.infer<typeof shortAnswerSchema>;

export const orderSchema = z.object({
  answer: z.array(textItemSchema),
  correct_order: z.number().optional(),
  answer_is_active: z.boolean().optional(),
});

export type Order = z.infer<typeof orderSchema>;

export const matchSchema = z.object({
  answer_is_active: z.boolean().optional(),
  correct_choice: z.array(textItemSchema),
  match_option: z.array(textItemSchema).optional(),
});

export type Match = z.infer<typeof matchSchema>;
