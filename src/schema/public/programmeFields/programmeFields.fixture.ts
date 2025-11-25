import { type ProgrammeFields } from "@/schema/public/programmeFields/programmeFields.schema"

export const programmeFieldsFixture = ({
  overrides
}: {
  overrides?: Partial<ProgrammeFields>
} = {}): ProgrammeFields => ({
  tier: null,
  tier_id: null,
  tier_slug: null,
  tier_description: null,
  tier_display_order: null,
  pathway: null,
  pathway_id: null,
  pathway_slug: null,
  pathway_description: null,
  pathway_display_order: null,
  examboard: null,
  examboard_id: null,
  examboard_slug: null,
  examboard_description: null,
  examboard_display_order: null,
  year: "1",
  year_slug: "year-1",
  year_id: 1,
  year_description: "Year 1",
  year_display_order: 1,
  keystage: "KS1",
  keystage_id: 1,
  keystage_slug: "ks1",
  keystage_description: "Key Stage 1",
  keystage_display_order: 1,
  phase: "primary",
  phase_id: 0,
  phase_slug: "primary",
  phase_description: "Primary",
  phase_display_order: 1,
  subject: "Maths",
  subject_id: 1,
  subject_slug: "maths",
  subject_description: "subject-description",
  subject_display_order: 1,
  subject_parent: "Maths",
  ...overrides
})
