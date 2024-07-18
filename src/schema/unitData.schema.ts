import { z } from "zod";

import { _stateSchema, _cohortSchema } from "./base.schema";

export const unitDataSchema = z.object({
  unit_id: z.number(),
  unit_uid: z.string(),
  description: z.string().nullable(),
  slug: z.string(),
  tags: z.array(z.number()).nullable(),
  deprecated_fields: z.record(z.unknown()).nullable().optional(),
  title: z.string(),
  _state: _stateSchema,
  _cohort: _cohortSchema,
  expiration_date: z.string().nullable(),
});

export type UnitData = z.infer<typeof unitDataSchema>;
