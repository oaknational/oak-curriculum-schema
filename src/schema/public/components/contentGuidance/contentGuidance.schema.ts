import { z } from "zod";

export const contentGuidanceSchema = z.object({
  contentguidance_label: z.string().nullable(),
  contentguidance_description: z.string().nullable(),
  contentguidance_area: z.string().nullable(),
});

export type ContentGuidance = z.infer<typeof contentGuidanceSchema>;

export const contentGuidanceSchemaCamel = z.object({
  contentguidanceLabel: z.string().nullable(),
  contentguidanceDescription: z.string().nullable(),
  contentguidanceArea: z.string().nullable(),
});
export type ContentGuidanceCamel = z.infer<typeof contentGuidanceSchemaCamel>;
