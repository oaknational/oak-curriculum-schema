import { z } from "zod"
import zodToCamelCase from "zod-to-camel-case"

export const imageObjectSchema = z
  .object({
    format: z.enum(["png", "jpg", "jpeg", "webp", "gif", "svg"]),
    secure_url: z.url(),
    url: z.url(),
    height: z.number(),
    width: z.number(),
    metadata: z.union([
      z
        .object({
          attribution: z.string(),
          usageRestriction: z.string(),
        })
        .partial(),
      z.array(z.never()).length(0), // cloudinary provides an empty array if there is no metadata ?!
    ]),
    public_id: z.string(),
    version: z.number(),
  })
  .partial()

export type ImageObject = z.infer<typeof imageObjectSchema>

export const imageItemSchema = z.object({
  image_object: imageObjectSchema,
  type: z.literal("image"),
})

export type ImageItem = z.infer<typeof imageItemSchema>

export const textItemSchema = z.object({
  text: z.string(),
  type: z.literal("text"),
})

export type TextItem = z.infer<typeof textItemSchema>

export const imageObjectSchemaCamel = zodToCamelCase(imageObjectSchema)
export type ImageObjectCamel = z.infer<typeof imageObjectSchemaCamel>

export const imageItemSchemaCamel = zodToCamelCase(imageItemSchema)
export type ImageItemCamel = z.infer<typeof imageItemSchemaCamel>

export const textItemSchemaCamel = zodToCamelCase(textItemSchema)
export type TextItemCamel = z.infer<typeof textItemSchemaCamel>
