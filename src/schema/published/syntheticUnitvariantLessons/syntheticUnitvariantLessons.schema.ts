import { z } from "zod";
import { lessonDataSchema } from "./public/lessonData.schema";
import { unitDataSchema } from "./unitData.schema";
import { programmeFieldsSchema } from "./public/programmeFields.schema";
import { actionsSchema } from "./published/actions.schema";
import { featuresSchema } from "./public/features.schema";
import { staticLessonListSchema } from "./public/staticLessonList.schema";

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
