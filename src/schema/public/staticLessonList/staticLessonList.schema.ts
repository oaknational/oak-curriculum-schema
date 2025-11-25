import { z } from "zod"
import zodToCamelCase from "zod-to-camel-case"

const staticLesson = z.object({
  slug: z.string(),
  title: z.string(),
  order: z.number(),
  _state: z.string().optional(), // Optional field to match the fixture
})

export const staticLessonListSchema = z.array(staticLesson)

export type StaticLesson = z.infer<typeof staticLesson>
export type StaticLessonList = z.infer<typeof staticLessonListSchema>

export const staticLessonCamel = zodToCamelCase(staticLesson)
export type StaticLessonCamel = z.infer<typeof staticLessonCamel>

export const staticLessonListSchemaCamel = zodToCamelCase(
  staticLessonListSchema,
)
export type StaticLessonListCamel = z.infer<typeof staticLessonListSchemaCamel>
