import { z } from "zod";

export const fileObjectSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: z.string(),
  bytes: z.number(),
  width: z.number(),
  format: z.string(),
  height: z.number(),
  version: z.number(),
  duration: z.number().nullish(),
  metadata: z
    .object({
      source: z.string().nullish(),
      usageRestrictions: z.string().nullish(),
      attribution_required: z.string().nullish(),
    })
    .nullish(),
  created_at: z.string(),
  created_by: z.object({
    id: z.string(),
    type: z.string(),
  }),
  display_name: z.string(),
  resource_type: z.string(),
});

export const additionalFilesSchema = z.object({
  files: z.array(
    z.object({
      title: z.string(),
      file_object: fileObjectSchema,
    }),
  ),
});

export type FileObject = z.infer<typeof fileObjectSchema>;
export type AdditionalFiles = z.infer<typeof additionalFilesSchema>;
