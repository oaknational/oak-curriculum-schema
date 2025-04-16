import { z } from "zod";

export const featuresSchema = z
  .object({
    pe_practical: z.boolean(),
    age_restriction: z.string().nullable(),
  })
  .partial();

export type Features = z.infer<typeof featuresSchema>;
