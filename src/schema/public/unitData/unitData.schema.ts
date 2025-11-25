import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import { _stateSchema, _cohortSchema } from "@/schema/public/base/base.schema";

export const unitDataSchema = z.object({
  unit_id: z.number(),
  unit_uid: z.string(),
  description: z.string().nullable(),
  slug: z.string(),
  tags: z.array(z.number()).nullable(),
  deprecated_fields: z.record(z.string(), z.unknown()).nullable().optional(),
  title: z.string(),
  subjectcategories: z.array(z.union([z.number(), z.string()])).nullable(),
  prior_knowledge_requirements: z.array(z.string()).nullish(),
  _state: _stateSchema,
  _cohort: _cohortSchema,
  expiration_date: z.string().nullable(),
});
export type UnitData = z.infer<typeof unitDataSchema>;

export const unitDataSchemaCamel = zodToCamelCase(unitDataSchema);
export type UnitDataCamel = z.infer<typeof unitDataSchemaCamel>;
