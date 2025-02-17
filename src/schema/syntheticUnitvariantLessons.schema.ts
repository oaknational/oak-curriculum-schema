import { z } from "zod";
import { lessonDataSchema } from "./lessonData.schema";
import { unitDataSchema } from "./unitData.schema";
import { programmeFieldsSchema } from "./programmeFields.schema";
import { actionsSchema } from "./actions.schema";
import { featuresSchema } from "./features.schema";

export const syntheticUnitvariantLessonsSchema = z.object({
  lesson_slug: z.string(),
  unit_slug: z.string(),
  programme_slug: z.string(),
  is_legacy: z.boolean(),
  lesson_data: lessonDataSchema,
  unit_data: unitDataSchema,
  null_unitvariant_id: z.number(),
  unitvariant_id: z.number().nullish(),
  programme_fields: programmeFieldsSchema,
  supplementary_data: z.object({
    unit_order: z.number(),
    order_in_unit: z.number(),
  }),
  actions: actionsSchema.nullable().optional(),
  features: featuresSchema.nullable().optional(),
});

export type SyntheticUnitvariantLessons = z.infer<
  typeof syntheticUnitvariantLessonsSchema
>;
