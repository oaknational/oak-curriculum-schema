import { ProgrammeFields } from "@/schema/programmeFields.schema";

export const programmeFieldsFixture = ({
  overrides,
}: {
  overrides?: Partial<ProgrammeFields>;
} = {}): ProgrammeFields => ({
  tier: null,
  tier_id: null,
  tier_slug: null,
  tier_description: null,
  tier_display_order: null,
  examboard: null,
  examboard_id: null,
  examboard_slug: null,
  examboard_description: null,
  examboard_display_order: null,
  year: "year",
  year_slug: "year-1",
  year_id: 1,
  year_description: "year-description",
  year_display_order: 1,
  keystage: "KS1",
  keystage_id: 1,
  keystage_slug: "ks1",
  keystage_description: "Key Stage 1",
  keystage_display_order: 1,
  phase: "primary",
  phase_id: 0,
  phase_slug: "primary",
  phase_description: "primary",
  phase_display_order: 1,
  subject: "subject",
  subject_id: 1,
  subject_slug: "subject-slug",
  subject_description: "subject-description",
  subject_display_order: 1,
  ...overrides,
});
