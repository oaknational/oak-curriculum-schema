import { z } from "zod";
import { syntheticUnitvariantLessonsSchema } from "../syntheticUnitvariantLessons.schema";
import { unitvariantSchema } from "../../public/unitvariant.schema";
import { programmeFieldsSchema } from "../../public/programmeFields.schema";

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
