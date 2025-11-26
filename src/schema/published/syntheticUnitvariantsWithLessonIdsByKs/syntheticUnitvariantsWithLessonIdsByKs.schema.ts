import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import { syntheticUnitvariantsWithLessonIdsBaseSchema } from "@/schema/published/syntheticUnitvariantsWithLessonIdsBase/syntheticUnitvariantsWithLessonIdsBase.schema";
import { threadSchema } from "@/schema/public/thread/thread.schema";

export const syntheticUnitvariantsWithLessonIdsByKsSchema = z.object({
  ...syntheticUnitvariantsWithLessonIdsBaseSchema.shape,
  programme_slug_by_year: z.string(),
  lesson_ids: z.array(z.number()).nullable(),
  threads: z.array(threadSchema).nullable(),
});
export type SyntheticUnitvariantsWithLessonIdsByKs = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByKsSchema
>;

export const syntheticUnitvariantsWithLessonIdsByKsSchemaCamel = zodToCamelCase(
  syntheticUnitvariantsWithLessonIdsByKsSchema,
);
export type SyntheticUnitvariantsWithLessonIdsByKsCamel = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsByKsSchemaCamel
>;
