import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const threadSchema = z.object({
  thread_id: z.number(),
  thread_title: z.string(),
  thread_slug: z.string(),
});
export type Thread = z.infer<typeof threadSchema>;

export const threadSchemaCamel = zodToCamelCase(threadSchema);
export type ThreadCamel = z.infer<typeof threadSchemaCamel>;
