import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const equipmentAndResourcesSchema = z.object({
  equipment: z.string(),
});

export type EquipmentAndResources = z.infer<typeof equipmentAndResourcesSchema>;

export const equipmentAndResourcesSchemaCamel = zodToCamelCase(
  equipmentAndResourcesSchema,
);
export type EquipmentAndResourcesCamel = z.infer<
  typeof equipmentAndResourcesSchemaCamel
>;
