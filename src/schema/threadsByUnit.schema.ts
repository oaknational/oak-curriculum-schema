import { z } from "zod";

export const threadsByUnitSchema = z.object({
  unit_id: z.number(),
  threads: z
    .array(z.object({ theme_slug: z.string(), theme_title: z.string() }))
    .nullable(),
});

export type ThreadsByUnit = z.infer<typeof threadsByUnitSchema>;
