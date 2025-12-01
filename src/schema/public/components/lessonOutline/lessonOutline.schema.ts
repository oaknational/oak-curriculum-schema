import { z } from "zod";

export const lessonOutlineSchema = z.object({
  lesson_outline: z.string(),
});

export type LessonOutline = z.infer<typeof lessonOutlineSchema>;

export const lessonOutlineSchemaCamel = z.object({
  lessonOutline: z.string(),
});
export type LessonOutlineCamel = z.infer<typeof lessonOutlineSchemaCamel>;
