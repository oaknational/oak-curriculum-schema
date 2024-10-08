import { syntheticUnitvariantLessonsByKsSchema } from "./syntheticUnitvariantLessonsByKs.schema";
import { z } from "zod";

export const programmeListingResponseSchema =
  syntheticUnitvariantLessonsByKsSchema.pick({
    lesson_data: true,
    programme_fields: true,
    is_legacy: true,
    programme_slug: true,
  });

export const programmeListingResponseSchemaArray = z.array(
  programmeListingResponseSchema,
);
