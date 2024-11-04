import { z } from "zod";
import { syntheticUnitvariantsWithLessonIdsSchema } from "./syntheticUnitvariantsWithLessonIds.schema";

export const syntheticUnitvariantsWithLessonIdsByKsSchema = z.object({
  ...syntheticUnitvariantsWithLessonIdsSchema.shape,
  programme_slug_by_year: z.string(),
});

export type SyntheticUnitvariantsWithLessonIdsByKs = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByKsSchema
>;
