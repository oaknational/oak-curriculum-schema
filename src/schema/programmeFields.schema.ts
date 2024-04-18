import { z } from "zod";
import { keystages, keystageSlugs, keystageDescriptions } from "./base.schema";

export const programmeFieldsSchema = z.object({
  tier: z.string().nullable(),
  tier_id: z.number().nullable(),
  tier_slug: z.string().nullable(),
  tier_description: z.string().nullable(),
  tier_display_order: z.number().nullable(),

  examboard: z.string().nullable(),
  examboard_id: z.number().nullable(),
  examboard_slug: z.string().nullable(),
  examboard_description: z.string().nullable(),
  examboard_display_order: z.number().nullable(),

  year: z.string(),
  year_slug: z.string(),
  year_id: z.number(),
  year_description: z.string(),
  year_display_order: z.number(),

  keystage: keystages,
  keystage_id: z.number(),
  keystage_slug: keystageSlugs,
  keystage_description: keystageDescriptions,
  keystage_display_order: z.number(),

  phase: z.string(),
  phase_id: z.number(),
  phase_slug: z.string(),
  phase_description: z.string(),
  phase_display_order: z.number(),

  subject: z.string(),
  subject_id: z.number(),
  subject_slug: z.string(),
  subject_description: z.string(),
  subject_display_order: z.number(),

  legacy: z.string().optional(),
  dataset: z.string().optional(),
});

export type ProgrammeFields = z.infer<typeof programmeFieldsSchema>;
