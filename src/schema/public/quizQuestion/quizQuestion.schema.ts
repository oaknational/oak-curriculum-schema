import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  imageItemSchema,
  textItemSchema,
} from "@/schema/public/imageTextItems/imageTextItems.schema";
import {
  matchSchema,
  multipleChoiceSchema,
  orderSchema,
  shortAnswerSchema,
} from "@/schema/public/quizAnswers/quizAnswers.schema";
import { _stateSchema, newState, publishedState } from "@/schema/public/base";

const answersObjectSchema = z.object({
  "multiple-choice": z.array(multipleChoiceSchema).optional(),
  "short-answer": z.array(shortAnswerSchema).optional(),
  order: z.array(orderSchema).optional(),
  match: z.array(matchSchema).optional(),
});

export const quizQuestionSchema = z.object({
  question_id: z.number(),
  question_uid: z.string(),
  question_type: z.string(),
  question_stem: z
    .array(z.union([textItemSchema, imageItemSchema]))
    .optional()
    .nullable(),
  answers: answersObjectSchema.optional().nullable(),
  answers_clean: answersObjectSchema.optional().nullable(),
  feedback: z.string().optional().nullable(),
  hint: z.string().optional().nullable(),
  active: z.boolean().optional(),
  order: z.number(),
  _state: _stateSchema,
  _release_id: z.number().optional(),
});
export type QuizQuestion = z.infer<typeof quizQuestionSchema>;

export const quizQuestionNewSchema = quizQuestionSchema
  .pick({
    question_id: true,
    question_uid: true,
    question_type: true,
    question_stem: true,
    answers: true,
    feedback: true,
    hint: true,
    active: true,
    order: true,
  })
  .extend({
    _state: newState,
  });
export type QuizQuestionNew = z.infer<typeof quizQuestionNewSchema>;

export const quizQuestionPublishedSchema = quizQuestionSchema.extend({
  _state: publishedState,
});
export type QuizQuestionPublished = z.infer<typeof quizQuestionPublishedSchema>;

export const quizQuestionSchemaCamel = zodToCamelCase(quizQuestionSchema);
export type QuizQuestionCamel = z.infer<typeof quizQuestionSchemaCamel>;

export const quizQuestionNewSchemaCamel = zodToCamelCase(quizQuestionNewSchema);
export type QuizQuestionNewCamel = z.infer<typeof quizQuestionNewSchemaCamel>;

export const quizQuestionPublishedSchemaCamel = zodToCamelCase(
  quizQuestionPublishedSchema,
);
export type QuizQuestionPublishedCamel = z.infer<
  typeof quizQuestionPublishedSchemaCamel
>;
