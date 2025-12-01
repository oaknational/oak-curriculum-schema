import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import { programmeFieldsSchema } from "@/schema/public/components/programmeFields/programmeFields.schema";
import { yearSlugs } from "@/schema/public/components/base/base.schema";
import { actionsSchema } from "@/schema/published/components/actions/actions.schema";

export const syntheticProgrammesByYearSchema = z.object({
  year_slug: yearSlugs,
  programme_slug: z.string(),
  base_slug: z.string(),
  is_legacy: z.boolean(),
  programme_fields: programmeFieldsSchema,
  actions: actionsSchema.nullish(), // the optional should be removed once old mvs are retired
  features: z
    .object({ nonCurriculum: z.boolean().optional() })
    .optional()
    .nullable(), // the optional should be removed once old mvs are retired
});
export type SyntheticProgrammesByYear = z.infer<
  typeof syntheticProgrammesByYearSchema
>;

export const syntheticProgrammesByYearSchemaCamel = zodToCamelCase(
  syntheticProgrammesByYearSchema,
);
export type SyntheticProgrammesByYearCamel = z.infer<
  typeof syntheticProgrammesByYearSchemaCamel
>;
