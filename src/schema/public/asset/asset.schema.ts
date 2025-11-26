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

export const assetSchema = timestampsSchema.extend({
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
export type Asset = z.infer<typeof assetSchema>;

export const assetNewSchema = assetSchema
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
export type AssetNew = z.infer<typeof assetNewSchema>;

export const assetPublishedSchema = assetSchema.extend({
  _state: publishedState,
});
export type AssetPublished = z.infer<typeof assetPublishedSchema>;

export const googleSchemaCamel = zodToCamelCase(googleSchema);
export type GoogleTypeCamel = z.infer<typeof googleSchemaCamel>;

export const bucketSchemaCamel = zodToCamelCase(bucketSchema);
export type BucketTypeCamel = z.infer<typeof bucketSchemaCamel>;

export const assetSchemaCamel = zodToCamelCase(assetSchema);
export type AssetCamel = z.infer<typeof assetSchemaCamel>;

export const assetNewSchemaCamel = zodToCamelCase(assetNewSchema);
export type AssetNewCamel = z.infer<typeof assetNewSchemaCamel>;

export const assetPublishedSchemaCamel = zodToCamelCase(assetPublishedSchema);
export type AssetPublishedCamel = z.infer<typeof assetPublishedSchemaCamel>;

export const assetObjectSchemaCamel = zodToCamelCase(assetObjectSchema);
export type AssetObjectTypeCamel = z.infer<typeof assetObjectSchemaCamel>;

// Backwards compatibility exports
export const assetsSchema = assetSchema;
export type AssetType = Asset;
export const assetsNewSchema = assetNewSchema;
export type AssetTypeNew = AssetNew;
export const assetsPublishedSchema = assetPublishedSchema;
export type AssetTypePublished = AssetPublished;
export const assetsSchemaCamel = assetSchemaCamel;
export type AssetTypeCamel = AssetCamel;
export const assetsNewSchemaCamel = assetNewSchemaCamel;
export type AssetTypeNewCamel = AssetNewCamel;
export const assetsPublishedSchemaCamel = assetPublishedSchemaCamel;
export type AssetTypePublishedCamel = AssetPublishedCamel;
