import { z } from "zod";
import { syntheticUnitvariantLessonsSchema } from "./syntheticUnitvariantLessons.schema";

export const syntheticUnitvariantLessonsByKsSchema = z.object({
  ...syntheticUnitvariantLessonsSchema.omit({ supplementary_data: true }).shape,
  programme_slug_by_year: z.string().array(),
  unitvariant_id: z.number(),
  order_in_unit: z.number(),
});

export type SyntheticUnitvariantLessonsByKs = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchema
>;
