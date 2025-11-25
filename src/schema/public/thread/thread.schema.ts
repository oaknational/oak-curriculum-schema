import { z } from "zod"

export const threadSchema = z.object({
  thread_id: z.number(),
  thread_title: z.string(),
  thread_slug: z.string(),
})

export type Thread = z.infer<typeof threadSchema>
