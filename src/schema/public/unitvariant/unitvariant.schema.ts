import { z } from "zod";
import zodToCamelCase from "zod-to-camel-case";

import {
  _stateSchema,
  _cohortSchema,
  newState,
  publishedState,
} from "@/schema/public/components/base/base.schema";
import { unitSchema } from "@/schema/public/unit/unit.schema";
import { programmeFieldsSchema } from "@/schema/public/components/programmeFields/programmeFields.schema";

export const unitvariantSchema = z.object({
  _state: _stateSchema,
  _cohort: _cohortSchema,
  unit_id: z.number(),
  unitvariant_id: z.number(),
  _deleted: z.boolean(),
  unit_overrides: unitSchema.partial(),
  programme_fields: programmeFieldsSchema.partial(),
});
export type Unitvariant = z.infer<typeof unitvariantSchema>;

export const unitvariantNewSchema = unitvariantSchema
  .pick({
    unit_id: true,
    unitvariant_id: true,
    unit_overrides: true,
    programme_fields: true,
    _cohort: true,
    _deleted: true,
  })
  .extend({
    _state: newState,
  });

export type UnitvariantNew = z.infer<typeof unitvariantNewSchema>;

export const unitvariantPublishedSchema = unitvariantSchema.extend({
  _state: publishedState,
});
export type UnitvariantPublished = z.infer<typeof unitvariantPublishedSchema>;

export const unitvariantSchemaCamel = zodToCamelCase(unitvariantSchema);
export type UnitvariantCamel = z.infer<typeof unitvariantSchemaCamel>;

export const unitvariantNewSchemaCamel = zodToCamelCase(unitvariantNewSchema);
export type UnitvariantNewCamel = z.infer<typeof unitvariantNewSchemaCamel>;

export const unitvariantPublishedSchemaCamel = zodToCamelCase(
  unitvariantPublishedSchema,
);
export type UnitvariantPublishedCamel = z.infer<
  typeof unitvariantPublishedSchemaCamel
>;
