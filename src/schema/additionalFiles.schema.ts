import { z } from "zod";

export const additionalFileObjectSchema = z.object({
  asset_id: z.number(),
  media_object: z.object({
    url: z.string(),
    type: z.string(),
    bytes: z.number(),
    width: z.number(),
    backup: z.boolean(),
    format: z.string(),
    height: z.number(),
    version: z.number(),
    asset_id: z.string(),
    metadata: z
      .object({
        asset_type: z.string().nullish(),
        source_type: z.string().nullish(),
        asset_source: z.string().nullish(),
        licence_type: z.string().nullish(),
        content_cycle: z.string().nullish(),
        permissionGranted: z.string().nullish(),
        source_partner_name: z.string().nullish(),
      })
      .nullish(),
    public_id: z.string(),
    created_at: z.string(),
    moderation: z
      .object({
        kind: z.string(),
        status: z.string(),
        updated_at: z.string(),
      })
      .nullish(),
    secure_url: z.string(),
    next_cursor: z.string().nullish(),
    asset_folder: z.string(),
    display_name: z.string(),
    resource_type: z.string(),
    moderation_kind: z.string(),
    moderation_status: z.string(),
    rate_limit_allowed: z.number(),
    rate_limit_reset_at: z.string(),
    rate_limit_remaining: z.number(),
  }),
});

export const additionalFilesSchema = z.object({
  tpc_downloadablefiles: z.array(additionalFileObjectSchema),
});

export type FileObject = z.infer<typeof additionalFileObjectSchema>;
export type AdditionalFiles = z.infer<typeof additionalFilesSchema>;
