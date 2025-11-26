import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const keywordsSchema = z.object({
  keyword: z.string(),
  description: z.string(),
});

export type Keywords = z.infer<typeof keywordsSchema>;

export const keywordsSchemaCamel = zodToCamelCase(keywordsSchema);
export type KeywordsCamel = z.infer<typeof keywordsSchemaCamel>;
