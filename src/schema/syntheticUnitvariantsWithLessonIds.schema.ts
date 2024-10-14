import { z } from "zod";
import { unitDataSchema } from "./unitData.schema";
import { unitvariantSchema } from "./unitvariant.schema";
import { programmeFieldsSchema } from "./programmeFields.schema";
import { actionsSchema } from "./actions.schema";

export const syntheticUnitvariantsWithLessonIdsSchema = z.object({
  base_slug: z.string(),
  unit_slug: z.string(),
  programme_slug: z.string(),
  is_legacy: z.boolean(),
  lesson_count: z.number(),
  lesson_sensitive_count: z.number(),
  lesson_expired_count: z.number(),
  unit_data: unitDataSchema,
  null_unitvariant_id: z.number(),
  programme_fields: programmeFieldsSchema,
  supplementary_data: z.object({
    unit_order: z.number(),
  }),
  expired: z.boolean(),
  actions: actionsSchema.nullable().optional(),
  features: z.object({}).optional().nullable(),
});

export type syntheticUnitvariantsWithLessonIds = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsSchema
>;
