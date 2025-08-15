import { z } from "zod";
import { syntheticUnitvariantsWithLessonIdsBaseSchema } from "./syntheticUnitvariantsWithLessonIdsBase.schema";

export const syntheticUnitvariantsWithLessonIdsByYearsSchema = z.object({
  ...syntheticUnitvariantsWithLessonIdsBaseSchema.shape,
  age_restricted_lesson_count: z.number(),
  complex_copyright_lesson_count: z.number(),
});

export type SyntheticUnitvariantsWithLessonIdsByYears = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByYearsSchema
>;
