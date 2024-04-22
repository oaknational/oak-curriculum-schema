import { z } from "zod";
import { unitDataSchema } from "./unitData.schema";
import { unitvariantSchema } from "./unitvariant.schema";
import { programmeFieldsSchema } from "./programmeFields.schema";

export const syntheticUnitvariantsWithLessonIdsSchema = z.object({
  unit_slug: z.string(),
  programme_slug: z.string(),
  is_legacy: z.boolean(),
  lesson_count: z.number(),
  unit_data: unitDataSchema,
  null_unitvariant: unitvariantSchema,
  programme_fields: programmeFieldsSchema,
  supplementary_data: z.object({
    unit_order: z.number(),
    order_in_unit: z.number(),
  }),
});

export type syntheticUnitvariantsWithLessonIds = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsSchema
>;
