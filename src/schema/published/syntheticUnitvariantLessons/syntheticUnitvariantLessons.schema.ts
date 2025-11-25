import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";
import { lessonDataSchema } from "@/schema/public/lessonData/lessonData.schema";
import { unitDataSchema } from "@/schema/public/unitData/unitData.schema";
import { programmeFieldsSchema } from "@/schema/public/programmeFields/programmeFields.schema";
import { actionsSchema } from "@/schema/published/actions/actions.schema";
import { featuresSchema } from "@/schema/public/features/features.schema";
import { staticLessonListSchema } from "@/schema/public/staticLessonList/staticLessonList.schema";

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
  static_lesson_list: staticLessonListSchema.nullish(),
});
export type SyntheticUnitvariantLessons = z.infer<
  typeof syntheticUnitvariantLessonsSchema
>;

export const syntheticUnitvariantLessonsSchemaCamel = zodToCamelCase(
  syntheticUnitvariantLessonsSchema
);
export type SyntheticUnitvariantLessonsCamel = z.infer<
  typeof syntheticUnitvariantLessonsSchemaCamel
>;
