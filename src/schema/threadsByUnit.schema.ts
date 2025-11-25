import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const threadsByUnitSchema = z.object({
  unit_id: z.number(),
  threads: z
    .array(z.object({ theme_slug: z.string(), theme_title: z.string() }))
    .nullable(),
});

export type ThreadsByUnit = z.infer<typeof threadsByUnitSchema>;

export const threadsByUnitSchemaCamel = zodToCamelCase(threadsByUnitSchema);
export type ThreadsByUnitCamel = z.infer<typeof threadsByUnitSchemaCamel>;
