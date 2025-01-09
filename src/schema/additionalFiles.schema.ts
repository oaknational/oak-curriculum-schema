import { z } from "zod";

export const fileObjectSchema = z.object({
  id: z.string(),
  url: z.string(),
  tags: z.array(z.string()),
  type: z.string(),
  bytes: z.number(),
  width: z.number(),
  format: z.string(),
  height: z.number(),
  version: z.number(),
  duration: z.number(),
  metadata: z.object({
    source: z.string(),
    usageRestrictions: z.string(),
    attribution_required: z.string(),
  }),
  folder_id: z.string(),
  public_id: z.string(),
  created_at: z.string(),
  created_by: z.object({
    id: z.string(),
    type: z.string(),
  }),
  secure_url: z.string(),
  access_mode: z.string(),
  uploaded_by: z.object({
    id: z.string(),
    type: z.string(),
  }),
  asset_folder: z.string(),
  display_name: z.string(),
  resource_type: z.string(),
  access_control: z.array(z.unknown()),
});

export const additionalFilesSchema = z.object({
  files: z.array(
    z.object({
      title: z.string(),
      file_object: fileObjectSchema,
    }),
  ),
});
