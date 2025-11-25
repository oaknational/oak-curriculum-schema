import { z } from "zod"
import { _stateSchema } from "@/schema/public/base/base.schema"

export const assetTypeSchema = z.enum([
  "lesson_guide",
  "downloadable_file",
  "slidedeck",
  "worksheet",
  "worksheet_answers",
  "supplementary_resource"
])

export type AssetTypeType = z.infer<typeof assetTypeSchema>

export const googleSchema = z.object({
  id: z.string().nullable(),
  url: z.string().url().nullable()
})

export type GoogleType = z.infer<typeof googleSchema>

export const bucketSchema = z.object({
  bucket_name: z.string().nullable(),
  bucket_path: z.string().nullable()
})

export type BucketType = z.infer<typeof bucketSchema>

export const assetObjectSchema = z
  .object({
    pdf: bucketSchema,
    powerpoint: bucketSchema,
    opendocument_presentation: bucketSchema,
    google_drive: googleSchema,
    google_slide: googleSchema.pick({ url: true })
  })
  .partial()

export type AssetObjectType = z.infer<typeof assetObjectSchema>

export const assetsSchema = z.object({
  asset_id: z.number(),
  asset_uid: z.string(),
  _state: _stateSchema,
  title: z.string(),
  description: z.string(),
  asset_type: assetTypeSchema,
  url: z.string().url(),
  asset_object: assetObjectSchema,
  tpc_media_ids: z.array(z.number()).nullable(),
  tpc_works_ids: z.array(z.number()).nullable()
})

export type AssetType = z.infer<typeof assetsSchema>
