import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  imageItemSchema,
  textItemSchema,
} from "@/schema/public/imageTextItems/imageTextItems.schema";

export const multipleChoiceSchema = z.object({
  answer: z.array(z.union([textItemSchema, imageItemSchema]).optional()),
  answer_is_active: z.boolean().optional(),
  answer_is_correct: z.boolean().optional(),
});
export type MultipleChoice = z.infer<typeof multipleChoiceSchema>;

export const shortAnswerSchema = z.object({
  answer: z.array(textItemSchema.optional()),
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

export const shortAnswerSchemaCamel = zodToCamelCase(shortAnswerSchema);
export type ShortAnswerCamel = z.infer<typeof shortAnswerSchemaCamel>;

export const multipleChoiceSchemaCamel = zodToCamelCase(multipleChoiceSchema);
export type MultipleChoiceCamel = z.infer<typeof multipleChoiceSchemaCamel>;

export const orderSchemaCamel = zodToCamelCase(orderSchema);
export type OrderCamel = z.infer<typeof orderSchemaCamel>;

export const matchSchemaCamel = zodToCamelCase(matchSchema);
export type MatchCamel = z.infer<typeof matchSchemaCamel>;
