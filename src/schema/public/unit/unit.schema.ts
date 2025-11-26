import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  _stateSchema,
  _cohortSchema,
  newState,
  publishedState,
} from "@/schema/public/components/base/base.schema";

export const unitSchema = z.object({
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
export type Unit = z.infer<typeof unitSchema>;

export const unitNewSchema = unitSchema
  .pick({
    unit_id: true,
    unit_uid: true,
    description: true,
    tags: true,
    deprecated_fields: true,
    subjectcategories: true,
    prior_knowledge_requirements: true,
    _cohort: true,
    expiration_date: true,
  })
  .extend({
    _state: newState,
  });

export const unitPublishedSchema = unitSchema.extend({
  _state: publishedState,
});

export type UnitNew = z.infer<typeof unitNewSchema>;
export type UnitPublished = z.infer<typeof unitPublishedSchema>;

export const unitSchemaCamel = zodToCamelCase(unitSchema);
export type UnitCamel = z.infer<typeof unitSchemaCamel>;

export const unitNewSchemaCamel = zodToCamelCase(unitNewSchema);
export type UnitNewCamel = z.infer<typeof unitNewSchemaCamel>;

export const unitPublishedSchemaCamel = zodToCamelCase(unitPublishedSchema);
export type UnitPublishedCamel = z.infer<typeof unitPublishedSchemaCamel>;
