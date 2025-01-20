import { z } from "zod";

const metadataSchema = z
  .object({
    asset_type: z.string(),
    source_type: z.string(),
    asset_source: z.string(),
    licence_type: z.string(),
    content_cycle: z.string(),
    permissionGranted: z.string(),
  })
  .partial();

export const clipMediaObjectSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: z.string(),
  bytes: z.number(),
  width: z.number(),
  format: z.string(),
  height: z.number(),
  version: z.number(),
  duration: z.number(),
  metadata: metadataSchema,
  secure_url: z.string(),
  access_mode: z.string(),
  asset_folder: z.string(),
  display_name: z.string(),
  resource_type: z.string(),
});

const trackSchema = z
  .object({
    id: z.string(),
    type: z.string(),
    asset_id: z.string(),
    duration: z.number(),
  })
  .partial();

export const clipVideoObjectSchema = z.object({
  id: z.string(),
  status: z.string().optional(),
  tracks: z.array(trackSchema).optional(),
  duration: z.number(),
  created_at: z.number(),
  mp4_support: z.string(),
  passthrough: z.string(),
  mux_asset_id: z.string(),
  playback_ids: z.array(
    z.object({
      id: z.string(),
      policy: z.string(),
    }),
  ),
  encoding_tier: z.string(),
  video_quality: z.string(),
  mux_playback_id: z.string(),
  signed_stream_id: z.string(),
  static_renditions: z.object({
    status: z.string(),
  }),
  max_resolution_tier: z.string(),
  max_stored_resolution: z.string(),
});

export const mediaClipCycleSchema = z.object({
  // Test data had mixture of numbers and strings
  order: z.number().or(z.string()),
  media_id: z.number().or(z.string()),
  video_id: z.number(),
  media_type: z.string(),
  custom_title: z.string(),
  media_object: clipMediaObjectSchema,
  video_object: clipVideoObjectSchema,
});

export const mediaClipsRecordSchema = z.record(
  z.string(),
  z.array(mediaClipCycleSchema),
);

export const lessonMediaClipsSchema = z.object({
  media_clips: mediaClipsRecordSchema,
});

export type MediaObjectSchema = z.infer<typeof clipMediaObjectSchema>;
export type VideoObjectSchema = z.infer<typeof clipVideoObjectSchema>;
export type MediaClipCycleSchema = z.infer<typeof mediaClipCycleSchema>;
export type MediaClipsRecordSchema = z.infer<typeof mediaClipsRecordSchema>;
export type LessonMediaClipsSchema = z.infer<typeof lessonMediaClipsSchema>;
