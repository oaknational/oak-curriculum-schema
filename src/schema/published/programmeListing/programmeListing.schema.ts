import { syntheticUnitvariantLessonsByKsSchemaOld } from "@/schema/published/syntheticUnitvariantsWithLessonIdsByKs/syntheticUnitvariantLessonsByKs.schema.old";
import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const programmeListingSchema =
  syntheticUnitvariantLessonsByKsSchemaOld.pick({
    lesson_data: true,
    programme_fields: true,
    is_legacy: true,
    programme_slug: true,
  });
export type ProgrammeListing = z.infer<typeof programmeListingSchema>;

export const programmeListingSchemaCamel = zodToCamelCase(
  programmeListingSchema,
);
export type ProgrammeListingCamel = z.infer<typeof programmeListingSchemaCamel>;

export const programmeListingArraySchema = z.array(programmeListingSchema);
export type ProgrammeListingArray = z.infer<typeof programmeListingArraySchema>;

export const programmeListingArraySchemaCamel = zodToCamelCase(
  programmeListingArraySchema,
);
export type ProgrammeListingArrayCamel = z.infer<
  typeof programmeListingArraySchemaCamel
>;

/**
 * @deprecated Use programmeListingSchema instead.
 */
export {
  /**
   * @deprecated Use programmeListingSchema instead.
   */
  programmeListingSchema as programmeListingResponseSchema,
  /**
   * @deprecated Use programmeListingArraySchema instead.
   */
  programmeListingArraySchema as programmeListingResponseSchemaArray,
  /**
   * @deprecated Use programmeListingSchemaCamel instead.
   */
  programmeListingSchemaCamel as programmeListingResponseSchemaCamel,
  /**
   * @deprecated Use programmeListingArraySchemaCamel instead.
   */
  programmeListingArraySchemaCamel as programmeListingResponseSchemaArrayCamel,
};

export type {
  /**
   * @deprecated Use ProgrammeListing instead.
   */
  ProgrammeListing as ProgrammeListingResponse,
  /**
   * @deprecated Use ProgrammeListingArray instead.
   */
  ProgrammeListingArray as ProgrammeListingResponseArray,
  /**
   * @deprecated Use ProgrammeListingCamel instead.
   */
  ProgrammeListingCamel as ProgrammeListingResponseCamel,
  /**
   * @deprecated Use ProgrammeListingArrayCamel instead.
   */
  ProgrammeListingArrayCamel as ProgrammeListingResponseArrayCamel,
};
