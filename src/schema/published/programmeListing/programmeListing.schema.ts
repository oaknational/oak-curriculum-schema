import { syntheticUnitvariantLessonsByKsSchemaOld } from "../syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantLessonsByKs.schema.old";
import { z } from "zod";

export const programmeListingResponseSchema =
  syntheticUnitvariantLessonsByKsSchemaOld.pick({
    lesson_data: true,
    programme_fields: true,
    is_legacy: true,
    programme_slug: true,
  });

export const programmeListingResponseSchemaArray = z.array(
  programmeListingResponseSchema,
);
