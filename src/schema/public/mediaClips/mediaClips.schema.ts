import { z } from 'zod'

export const mediaClipObjectSchema = z.object({
  url: z.string(),
  type: z.string(),
  bytes: z.number(),
  format: z.string(),
  display_name: z.string(),
  resource_type: z.string(),
  metadata: z
    .object({
      attribution: z.string().nullish()
    })
    .nullish()
})

export const videoClipObjectSchema = z
  .object({
    duration: z.number().nullable().optional(),
    mux_asset_id: z.string(),
    playback_ids: z.array(
      z.object({
        id: z.string(),
        policy: z.string()
      })
    ),
    mux_playback_id: z.string()
  })
  .nullable()

export const mediaClipCycleSchema = z.object({
  // text data had a mix of numbers and strings
  order: z.number().or(z.string()),
  media_id: z.number().or(z.string()),
  video_id: z.number().nullish(),
  media_type: z.string().nullish(),
  custom_title: z.string().nullish(),
  media_object: mediaClipObjectSchema,
  video_object: videoClipObjectSchema,
  transcriptSentences: z.array(z.string()).nullish()
})

export const mediaClipsRecordSchema = z.record(
  z.string(),
  z.array(mediaClipCycleSchema)
)

export const lessonMediaClipsSchema = z.object({
  media_clips: mediaClipsRecordSchema
})

export type MediaClipObject = z.infer<typeof mediaClipObjectSchema>
export type VideoClipObject = z.infer<typeof videoClipObjectSchema>
export type MediaClipCycle = z.infer<typeof mediaClipCycleSchema>
export type MediaClipsRecord = z.infer<typeof mediaClipsRecordSchema>
export type LessonMediaClips = z.infer<typeof lessonMediaClipsSchema>
