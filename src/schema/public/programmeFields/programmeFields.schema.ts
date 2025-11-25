import { z } from "zod";
import {
  keystages,
  keystageSlugs,
  keystageDescriptions,
  examboards,
  examboardSlugs,
  examboardDescriptions,
  tierSlugs,
  tierDescriptions,
  tiers,
  yearSlugs,
  yearDescriptions,
  years,
  phases,
  phaseSlugs,
  phaseDescriptions,
  subjects,
  subjectSlugs,
  pathways,
  pathwaySlugs,
  pathwayDescriptions,
} from "@/schema/public/base/base.schema";
import zodToCamelCase from "zod-to-camel-case";

export const programmeFieldsSchema = z.object({
  pathway: pathways.nullable(),
  pathway_id: z.number().nullable(),
  pathway_slug: pathwaySlugs.nullable(),
  pathway_description: pathwayDescriptions.nullable(),
  pathway_display_order: z.number().nullable(),

  tier: tiers.nullable(),
  tier_id: z.number().nullable(),
  tier_slug: tierSlugs.nullable(),
  tier_description: tierDescriptions.nullable(),
  tier_display_order: z.number().nullable(),

  examboard: examboards.nullable(),
  examboard_id: z.number().nullable(),
  examboard_slug: examboardSlugs.nullable(),
  examboard_description: examboardDescriptions.nullable(),
  examboard_display_order: z.number().nullable(),

  year: years,
  year_slug: yearSlugs,
  year_id: z.number(),
  year_description: yearDescriptions,
  year_display_order: z.number(),

  keystage: keystages,
  keystage_id: z.number(),
  keystage_slug: keystageSlugs,
  keystage_description: keystageDescriptions,
  keystage_display_order: z.number(),

  phase: phases,
  phase_id: z.number(),
  phase_slug: phaseSlugs,
  phase_description: phaseDescriptions,
  phase_display_order: z.number(),

  subject: subjects,
  subject_id: z.number(),
  subject_slug: subjectSlugs,
  subject_description: z.string(),
  subject_display_order: z.number(),
  subject_parent: subjects.nullish(),

  optionality: z.string().optional(),
  legacy: z.string().optional(),
  dataset: z.string().optional(),
});
export type ProgrammeFields = z.infer<typeof programmeFieldsSchema>;

export const programmeFieldsSchemaCamel = zodToCamelCase(programmeFieldsSchema);
export type ProgrammeFieldsCamel = z.infer<typeof programmeFieldsSchemaCamel>;
