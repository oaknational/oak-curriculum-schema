import { z } from "zod";
import { programmeFieldsSchema } from "./programmeFields.schema";
import { examboardSlugs, tierSlugs, yearSlugs } from "./base.schema";

export const syntheticProgrammesByYearSchema = z.object({
  year_slug: yearSlugs,
  programme_slug: z.string(),
  base_slug: z.string(),
  syntheticProgrammesSchema: z.object({
    full_slug: z.string(),
    is_legacy: z.boolean(),
    tier_slug: tierSlugs.nullable(),
    exam_board_slug: examboardSlugs.nullable(),
  }),
  combined_programme_fields: programmeFieldsSchema.partial(),
  base_programme_fields: programmeFieldsSchema.partial(),
});

export type SyntheticProgrammesByYear = z.infer<
  typeof syntheticProgrammesByYearSchema
>;
