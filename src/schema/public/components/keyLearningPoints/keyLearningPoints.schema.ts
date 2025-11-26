import { z } from "zod";

export const keyLearningPointsSchema = z.object({
  key_learning_point: z.string(),
});

export type KeyLearningPoints = z.infer<typeof keyLearningPointsSchema>;

export const keyLearningPointsSchemaCamel = z.object({
  keyLearningPoint: z.string(),
});
export type KeyLearningPointsCamel = z.infer<
  typeof keyLearningPointsSchemaCamel
>;
