import { z } from "zod";

export const teacherTipsSchema = z.object({
  teacher_tip: z.string(),
});

export type TeacherTips = z.infer<typeof teacherTipsSchema>;

export const teacherTipsSchemaCamel = z.object({
  teacherTip: z.string(),
});
export type TeacherTipsCamel = z.infer<typeof teacherTipsSchemaCamel>;
