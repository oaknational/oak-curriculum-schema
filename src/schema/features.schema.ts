import { z } from "zod";

export const featuresSchema = z
  .object({
    pe_practical: z.boolean(),
  })
  .partial();

export type Features = z.infer<typeof featuresSchema>;
