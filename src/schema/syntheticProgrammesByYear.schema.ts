import { z } from "zod";
import { programmeFieldsSchema } from "./programmeFields.schema";
import { yearSlugs } from "./base.schema";

export const syntheticProgrammesByYearSchema = z.object({
  year_slug: yearSlugs,
  programme_slug: z.string(),
  base_slug: z.string(),
  is_legacy: z.boolean(),
  programme_fields: programmeFieldsSchema,
});

export type SyntheticProgrammesByYear = z.infer<
  typeof syntheticProgrammesByYearSchema
>;
