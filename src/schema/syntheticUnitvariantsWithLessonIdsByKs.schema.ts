import { z } from "zod";
import { syntheticUnitvariantsWithLessonIdsSchema } from "./syntheticUnitvariantsWithLessonIds.schema";
import { threadSchema } from "./thread.schema";

export const syntheticUnitvariantsWithLessonIdsByKsSchema = z.object({
  ...syntheticUnitvariantsWithLessonIdsSchema.shape,
  programme_slug_by_year: z.string(),
  lesson_ids: z.array(z.number()).nullable(),
  threads: z.array(threadSchema).nullable(),
});

export type SyntheticUnitvariantsWithLessonIdsByKs = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByKsSchema
>;
