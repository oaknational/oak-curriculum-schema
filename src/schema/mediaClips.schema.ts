import { z } from "zod";

// TODO: Schema is not complete so until data & structure is consistent is known partial() & nullish() being implemented

export const clipMediaObjectSchema = z
  .object({
    id: z.string(),
    url: z.string(),
    type: z.string(),
    bytes: z.number(),
    format: z.string(),
    duration: z.number().nullable(),
    display_name: z.string(),
    resource_type: z.string(),
  })
  .partial()
  .nullish();

export const clipVideoObjectSchema = z
  .object({
    id: z.string(),
    duration: z.number().nullable(),
    mux_asset_id: z.string(),
    playback_ids: z.array(
      z
        .object({
          id: z.string(),
          policy: z.string(),
        })
        .partial()
        .nullish(),
    ),
    mux_playback_id: z.string(),
  })
  .partial()
  .nullish();

export const mediaClipCycleSchema = z
  .object({
    // Test data had mixture of numbers and strings
    order: z.number().or(z.string()),
    media_id: z.number().or(z.string()),
    video_id: z.number().nullable(),
    media_type: z.string().nullish(),
    custom_title: z.string().nullish(),
    media_object: clipMediaObjectSchema,
    video_object: clipVideoObjectSchema,
  })
  .partial()
  .nullish();

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
