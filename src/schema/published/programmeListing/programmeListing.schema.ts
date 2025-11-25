import { syntheticUnitvariantLessonsByKsSchemaOld } from "@/schema/published/syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantLessonsByKs.schema.old";
import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

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

export const programmeListingResponseSchemaCamel = zodToCamelCase(programmeListingResponseSchema);
export type ProgrammeListingResponseCamel = z.infer<typeof programmeListingResponseSchemaCamel>;

export const programmeListingResponseSchemaArrayCamel = zodToCamelCase(programmeListingResponseSchemaArray);
export type ProgrammeListingResponseArrayCamel = z.infer<typeof programmeListingResponseSchemaArrayCamel>;
