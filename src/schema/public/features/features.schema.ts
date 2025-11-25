import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const featuresSchema = z
  .object({
    pe_practical: z.boolean(),
    age_restriction: z.string().nullable(),
    agf__geo_restricted: z.boolean().nullish(),
    agf__login_required: z.boolean().nullish(),
  })
  .partial();
export type Features = z.infer<typeof featuresSchema>;

export const featuresSchemaCamel = zodToCamelCase(featuresSchema);
export type FeaturesCamel = z.infer<typeof featuresSchemaCamel>;
