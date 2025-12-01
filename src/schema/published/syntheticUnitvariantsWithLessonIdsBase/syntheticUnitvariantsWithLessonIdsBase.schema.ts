import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import { unitSchema } from "@/schema/public/unit/unit.schema";
import { programmeFieldsSchema } from "@/schema/public/components/programmeFields/programmeFields.schema";
import { actionsSchema } from "@/schema/published/components/actions/actions.schema";
import { staticLessonListSchema } from "@/schema/public/components/staticLessonList/staticLessonList.schema";

export const syntheticUnitvariantsWithLessonIdsBaseSchema = z.object({
  base_slug: z.string(),
  unit_slug: z.string(),
  programme_slug: z.string(),
  is_legacy: z.boolean(),
  lesson_count: z.number(),
  lesson_sensitive_count: z.number(),
  lesson_expired_count: z.number(),
  unit_data: unitSchema,
  null_unitvariant_id: z.number(),
  programme_fields: programmeFieldsSchema,
  supplementary_data: z.object({
    unit_order: z.number(),
    static_lesson_list: staticLessonListSchema.nullish(),
  }),
  expired: z.boolean(),
  actions: actionsSchema.nullish(), // the optional should be removed once old mvs are retired
  features: z.object({}).optional().nullable(), // the optional should be removed once old mvs are retired
});

export type SyntheticUnitvariantsWithLessonIdsBase = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsBaseSchema
>;

export const syntheticUnitvariantsWithLessonIdsBaseSchemaCamel = zodToCamelCase(
  syntheticUnitvariantsWithLessonIdsBaseSchema,
);
export type SyntheticUnitvariantsWithLessonIdsBaseCamel = z.infer<
  typeof syntheticUnitvariantsWithLessonIdsBaseSchemaCamel
>;
