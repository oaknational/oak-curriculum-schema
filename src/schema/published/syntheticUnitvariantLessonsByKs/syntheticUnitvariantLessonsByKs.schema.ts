import { z } from "zod";
import { syntheticUnitvariantLessonsSchema } from "@/schema/published/syntheticUnitvariantLessons/syntheticUnitvariantLessons.schema";
import zodToCamelCase from "zod-to-camel-case";

export const syntheticUnitvariantLessonsByKsSchema = z.object({
  ...syntheticUnitvariantLessonsSchema.omit({ supplementary_data: true }).shape,
  programme_slug_by_year: z.string().array(),
  order_in_unit: z.number(),
});

export type SyntheticUnitvariantLessonsByKs = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchema
>;

export const syntheticUnitvariantLessonsByKsSchemaCamel = zodToCamelCase(
  syntheticUnitvariantLessonsByKsSchema
);
export type SyntheticUnitvariantLessonsByKsCamel = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchemaCamel
>;
