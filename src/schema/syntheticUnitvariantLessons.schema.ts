import { z } from "zod";
import { lessonDataSchema } from "./lessonData.schema";
import { unitDataSchema } from "./unitData.schema";
import { unitvariantSchema } from "./unitvariant.schema";
import { programmeFieldsSchema } from "./programmeFields.schema";

export const syntheticUnitvariantLessonsSchema = z.object({
  lesson_slug: z.string(),
  unit_slug: z.string(),
  base_slug: z.string(),
  programme_slug: z.string(),
  is_legacy: z.boolean(),
  lesson_data: lessonDataSchema,
  unit_data: unitDataSchema,
  null_unitvariant: unitvariantSchema,
  programme_fields: programmeFieldsSchema,
  supplementary_data: z.object({
    unit_order: z.number(),
    order_in_unit: z.number(),
  }),
});

export type SyntheticUnitvariantLessons = z.infer<
  typeof syntheticUnitvariantLessonsSchema
>;
