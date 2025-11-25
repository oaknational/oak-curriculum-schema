import { z } from "zod";
import { syntheticUnitvariantLessonsSchema } from "@/schema/published/syntheticUnitvariantLessons/syntheticUnitvariantLessons.schema";
import { unitvariantSchema } from "@/schema/public/unitvariant/unitvariant.schema";
import { programmeFieldsSchema } from "@/schema/public/programmeFields/programmeFields.schema";
import zodToCamelCase from "zod-to-camel-case";

export const syntheticUnitvariantLessonsByKsSchemaOld = z.object({
  ...syntheticUnitvariantLessonsSchema.omit({ null_unitvariant_id: true })
    .shape,
  unitvariant_id: z.number().nullable(),
  null_unitvariant: unitvariantSchema,
  programme_fields: programmeFieldsSchema.omit({
    pathway: true,
    pathway_description: true,
    pathway_display_order: true,
    pathway_id: true,
    pathway_slug: true,
  }),
});

export type SyntheticUnitvariantLessonsByKsOld = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchemaOld
>;

export const syntheticUnitvariantLessonsByKsSchemaOldCamel = zodToCamelCase(
  syntheticUnitvariantLessonsByKsSchemaOld
);
export type SyntheticUnitvariantLessonsByKsOldCamel = z.infer<
  typeof syntheticUnitvariantLessonsByKsSchemaOldCamel
>;
