import { z } from "zod";

const MetadataSchema = z
  .object({
    asset_type: z.string(),
    source_type: z.string(),
    asset_source: z.string(),
    licence_type: z.string(),
    content_cycle: z.string(),
    permissionGranted: z.string(),
  })
  .partial();

const mediaObjectSchema = z.object({
  id: z.string(),
  url: z.string(),
  type: z.string(),
  bytes: z.number(),
  width: z.number(),
  format: z.string(),
  height: z.number(),
  version: z.number(),
  duration: z.number(),
  metadata: MetadataSchema,
  secure_url: z.string(),
  access_mode: z.string(),
  asset_folder: z.string(),
  display_name: z.string(),
  resource_type: z.string(),
});

const TrackSchema = z
  .object({
    id: z.string(),
    type: z.string(),
    asset_id: z.string(),
    duration: z.number(),
  })
  .partial();

export const videoObjectSchema = z.object({
  id: z.string(),
  status: z.string(),
  tracks: z.array(TrackSchema),
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
  non_standard_input_reasons: z.object({
    audio_codec: z.string(),
  }),
});

export const mediaClipSchema = z.object({
  order: z.string(),
  media_id: z.string(),
  video_id: z.number(),
  media_type: z.string(),
  custom_title: z.string(),
  media_object: mediaObjectSchema,
  video_object: videoObjectSchema,
});

const MediaClipsSchema = z.record(z.string(), z.array(mediaClipSchema));

export const lessonMediaClipsSchema = z.object({
  media_clips: MediaClipsSchema,
});
export type LessonMediaClipsSchema = z.infer<typeof lessonMediaClipsSchema>;
export type MediaObjectSchema = z.infer<typeof mediaObjectSchema>;
export type VideoObjectSchema = z.infer<typeof videoObjectSchema>;
