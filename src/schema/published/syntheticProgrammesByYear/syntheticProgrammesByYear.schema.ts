import { z } from "zod"
import { programmeFieldsSchema } from "@/schema/public/programmeFields/programmeFields.schema"
import { yearSlugs } from "@/schema/public/base/base.schema"
import { actionsSchema } from "@/schema/published/actions/actions.schema"

export const syntheticProgrammesByYearSchema = z.object({
  year_slug: yearSlugs,
  programme_slug: z.string(),
  base_slug: z.string(),
  is_legacy: z.boolean(),
  programme_fields: programmeFieldsSchema,
  actions: actionsSchema.nullable().optional(), // the optional should be removed once old mvs are retired
  features: z
    .object({ nonCurriculum: z.boolean().optional() })
    .optional()
    .nullable() // the optional should be removed once old mvs are retired
})

export type SyntheticProgrammesByYear = z.infer<
  typeof syntheticProgrammesByYearSchema
>
