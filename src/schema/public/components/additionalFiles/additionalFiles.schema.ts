import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const additionalFileObjectSchema = z.object({
  asset_id: z.number(),
  media_id: z.number(),
  media_object: z.object({
    url: z.string(),
    bytes: z.number(),
    display_name: z.string(),
  }),
});
export type AdditionalFileObject = z.infer<typeof additionalFileObjectSchema>;

export const additionalFilesSchema = z.object({
  downloadable_files: z.array(additionalFileObjectSchema).nullish(),
});
export type AdditionalFiles = z.infer<typeof additionalFilesSchema>;

export const additionalFilesSchemaCamel = zodToCamelCase(additionalFilesSchema);
export type AdditionalFilesCamel = z.infer<typeof additionalFilesSchemaCamel>;

export const additionalFileObjectSchemaCamel = zodToCamelCase(
  additionalFileObjectSchema,
);
export type AdditionalFileObjectCamel = z.infer<
  typeof additionalFileObjectSchemaCamel
>;
