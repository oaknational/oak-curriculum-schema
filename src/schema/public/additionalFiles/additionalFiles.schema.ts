import { z } from "zod"

export const additionalFileObjectSchema = z.object({
  asset_id: z.number(),
  media_id: z.number(),
  media_object: z.object({
    url: z.string(),
    bytes: z.number(),
    display_name: z.string()
  })
})

export const additionalFilesSchema = z.object({
  downloadable_files: z.array(additionalFileObjectSchema).nullish()
})

export type AdditionalFileObject = z.infer<typeof additionalFileObjectSchema>
export type AdditionalFiles = z.infer<typeof additionalFilesSchema>
