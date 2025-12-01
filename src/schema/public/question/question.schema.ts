import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  imageItemSchema,
  textItemSchema,
} from "@/schema/public/components/imageTextItems/imageTextItems.schema";
import {
  matchSchema,
  multipleChoiceSchema,
  orderSchema,
  shortAnswerSchema,
} from "@/schema/public/components/quizAnswers/quizAnswers.schema";
import {
  _stateSchema,
  newState,
  publishedState,
} from "@/schema/public/components/base";

const answersObjectSchema = z.object({
  "multiple-choice": z.array(multipleChoiceSchema).optional(),
  "short-answer": z.array(shortAnswerSchema).optional(),
  order: z.array(orderSchema).optional(),
  match: z.array(matchSchema).optional(),
});

export const questionSchema = z.object({
  question_id: z.number(),
  question_uid: z.string(),
  question_type: z.string(),
  question_stem: z
    .array(z.union([textItemSchema, imageItemSchema]))
    .optional()
    .nullable(),
  answers: answersObjectSchema.optional().nullable(),
  answers_clean: answersObjectSchema.optional().nullable(), // this is a computed field
  feedback: z.string().optional().nullable(),
  hint: z.string().optional().nullable(),
  active: z.boolean().optional(),
  order: z.number(),
  _state: _stateSchema,
  _release_id: z.number().nullish(),
});
export type Question = z.infer<typeof questionSchema>;

export const questionNewSchema = questionSchema
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
export type QuestionNew = z.infer<typeof questionNewSchema>;

export const questionPublishedSchema = questionSchema.extend({
  _state: publishedState,
});
export type QuestionPublished = z.infer<typeof questionPublishedSchema>;

export const questionSchemaCamel = zodToCamelCase(questionSchema);
export type QuestionCamel = z.infer<typeof questionSchemaCamel>;

export const questionNewSchemaCamel = zodToCamelCase(questionNewSchema);
export type QuestionNewCamel = z.infer<typeof questionNewSchemaCamel>;

export const questionPublishedSchemaCamel = zodToCamelCase(
  questionPublishedSchema,
);
export type QuestionPublishedCamel = z.infer<
  typeof questionPublishedSchemaCamel
>;

// Backwards compatibility exports
/**
 * @deprecated Use questionSchema instead.
 */
export const quizQuestionSchema = questionSchema;
export type QuizQuestion = Question;
