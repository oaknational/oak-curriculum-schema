import { z } from "zod";

export const imageObjectSchema = z.object({
  format: z.enum(["png", "jpg", "jpeg", "webp", "gif", "svg"]).optional(),
  secure_url: z.string().url(),
  url: z.string().url().optional(),
  height: z.number().optional(),
  width: z.number().optional(),
  metadata: z.union([
    z.array(z.any()),
    z.object({
      attribution: z.string().optional(),
      usageRestriction: z.string().optional(),
    }),
  ]),
  public_id: z.string().optional(),
  version: z.number().optional(),
});

export type ImageObject = z.infer<typeof imageObjectSchema>;

export const imageItemSchema = z.object({
  image_object: imageObjectSchema,
  type: z.literal("image"),
});

export type ImageItem = z.infer<typeof imageItemSchema>;

export const textItemSchema = z.object({
  text: z.string(),
  type: z.literal("text"),
});

export type TextItem = z.infer<typeof textItemSchema>;
