import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  _stateSchema,
  newState,
  publishedState,
  timestampsSchema,
} from "@/schema/public/components/base/base.schema";

export const assetTypeSchema = z.enum([
  "lesson_guide",
  "downloadable_file",
  "slidedeck",
  "worksheet",
  "worksheet_answers",
  "supplementary_resource",
]);

export type AssetTypeType = z.infer<typeof assetTypeSchema>;

export const googleSchema = z.object({
  id: z.string().nullable(),
  url: z.url().nullable(),
});

export type GoogleType = z.infer<typeof googleSchema>;

export const bucketSchema = z.object({
  bucket_name: z.string().nullable(),
  bucket_path: z.string().nullable(),
});

export type BucketType = z.infer<typeof bucketSchema>;

export const assetObjectSchema = z
  .object({
    pdf: bucketSchema,
    powerpoint: bucketSchema,
    opendocument_presentation: bucketSchema,
    google_drive: googleSchema,
    google_slide: googleSchema.pick({ url: true }),
  })
  .partial();

export type AssetObjectType = z.infer<typeof assetObjectSchema>;

export const assetsSchema = timestampsSchema.extend({
  asset_id: z.number(),
  asset_uid: z.string(),
  _state: _stateSchema,
  title: z.string(),
  description: z.string(),
  asset_type: assetTypeSchema,
  url: z.url(),
  asset_object: assetObjectSchema,
  tpc_media_ids: z.array(z.number()).nullable(),
  tpc_works_ids: z.array(z.number()).nullable(),
});
export type AssetType = z.infer<typeof assetsSchema>;

export const assetsNewSchema = assetsSchema
  .pick({
    asset_id: true,
    asset_uid: true,
    asset_type: true,
    asset_object: true,
    tpc_media_ids: true,
    tpc_works_ids: true,
    created_at: true,
    updated_at: true,
  })
  .extend({
    _state: newState,
    url: z.url().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
  });
export type AssetTypeNew = z.infer<typeof assetsNewSchema>;

export const assetsPublishedSchema = assetsSchema.extend({
  _state: publishedState,
});
export type AssetTypePublished = z.infer<typeof assetsPublishedSchema>;

export const googleSchemaCamel = zodToCamelCase(googleSchema);
export type GoogleTypeCamel = z.infer<typeof googleSchemaCamel>;

export const bucketSchemaCamel = zodToCamelCase(bucketSchema);
export type BucketTypeCamel = z.infer<typeof bucketSchemaCamel>;

export const assetsSchemaCamel = zodToCamelCase(assetsSchema);
export type AssetTypeCamel = z.infer<typeof assetsSchemaCamel>;

export const assetsNewSchemaCamel = zodToCamelCase(assetsNewSchema);
export type AssetTypeNewCamel = z.infer<typeof assetsNewSchemaCamel>;

export const assetsPublishedSchemaCamel = zodToCamelCase(assetsPublishedSchema);
export type AssetTypePublishedCamel = z.infer<
  typeof assetsPublishedSchemaCamel
>;

export const assetObjectSchemaCamel = zodToCamelCase(assetObjectSchema);
export type AssetObjectTypeCamel = z.infer<typeof assetObjectSchemaCamel>;
