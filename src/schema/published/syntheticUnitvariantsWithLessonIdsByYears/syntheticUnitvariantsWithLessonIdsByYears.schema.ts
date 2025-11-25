import { z } from "zod";
import { syntheticUnitvariantsWithLessonIdsBaseSchema } from "@/schema/published/syntheticUnitvariantsWithLessonIdsBase/syntheticUnitvariantsWithLessonIdsBase.schema";
import zodToCamelCase from "zod-to-camel-case";

export const syntheticUnitvariantsWithLessonIdsByYearsSchema = z.object({
  ...syntheticUnitvariantsWithLessonIdsBaseSchema.shape,
  age_restricted_lesson_count: z.number(),
  complex_copyright_lesson_count: z.number(),
});

export type SyntheticUnitvariantsWithLessonIdsByYears = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByYearsSchema
>;

export const syntheticUnitvariantsWithLessonIdsByYearsSchemaCamel =
  zodToCamelCase(syntheticUnitvariantsWithLessonIdsByYearsSchema);
export type SyntheticUnitvariantsWithLessonIdsByYearsCamel = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByYearsSchemaCamel
>;
