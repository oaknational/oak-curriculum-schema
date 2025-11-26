import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const misconceptionsAndCommonMistakesSchema = z.object({
  misconception: z.string(),
  response: z.string(),
});

export type MisconceptionsAndCommonMistakes = z.infer<
  typeof misconceptionsAndCommonMistakesSchema
>;

export const misconceptionsAndCommonMistakesSchemaCamel = zodToCamelCase(
  misconceptionsAndCommonMistakesSchema,
);
export type MisconceptionsAndCommonMistakesCamel = z.infer<
  typeof misconceptionsAndCommonMistakesSchemaCamel
>;
