import { z } from "zod";

export const threadsByUnitSchema = z.object({
  unit_id: z.number(),
  threads: z
    .array(z.object({ themeSlug: z.string(), themeTitle: z.string() }))
    .nullable(),
});

export type ThreadsByUnit = z.infer<typeof threadsByUnitSchema>;
