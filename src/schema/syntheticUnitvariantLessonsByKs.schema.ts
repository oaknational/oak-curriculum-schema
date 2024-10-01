import { z } from "zod";
import { syntheticUnitvariantLessonsSchema } from "./syntheticUnitvariantLessons.schema";
import { unitvariantSchema } from "./unitvariant.schema";

export const syntheticUnitvariantLessonsByKsSchema = z.object({
  ...syntheticUnitvariantLessonsSchema.omit({ null_unitvariant_id: true })
    .shape,
  unitvariant_id: z.number().nullable(),
  null_unitvariant: unitvariantSchema,
});

export type SyntheticUnitvariantLessonsByKs = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchema
>;
