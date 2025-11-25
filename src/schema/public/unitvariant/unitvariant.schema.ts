import { z } from 'zod'

import { _stateSchema, _cohortSchema } from '@/schema/public/base/base.schema'
import { unitDataSchema } from '@/schema/public/unitData/unitData.schema'
import { programmeFieldsSchema } from '@/schema/public/programmeFields/programmeFields.schema'

export const unitvariantSchema = z.object({
  _state: _stateSchema,
  _cohort: _cohortSchema,
  unit_id: z.number(),
  unitvariant_id: z.number(),
  _deleted: z.boolean(),
  unit_overrides: unitDataSchema.partial(),
  programme_fields: programmeFieldsSchema.partial()
})

export type Unitvariant = z.infer<typeof unitvariantSchema>
