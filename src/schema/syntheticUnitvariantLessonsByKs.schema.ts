import { z } from "zod";
import { syntheticUnitvariantLessonsSchema } from "./syntheticUnitvariantLessons.schema";

export const syntheticUnitvariantLessonsByKsSchema = z.object({
  ...syntheticUnitvariantLessonsSchema.shape,
  unitvariant_id: z.number(),
});

export type SyntheticUnitvariantLessonsByKs = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchema
>;
