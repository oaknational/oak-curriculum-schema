import { SyntheticProgrammesByYear } from "@/schema/syntheticProgrammesByYear.schema";

export const syntheticProgrammesByYearFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticProgrammesByYear>;
} = {}): SyntheticProgrammesByYear => ({
  year_slug: "year-1",
  base_slug: "maths-primary-year-1",
  programme_slug: "maths-primary-year-1",
  syntheticProgrammesSchema: {
    full_slug: "maths-primary-year-1",
    is_legacy: false,
    tier_slug: null,
    exam_board_slug: null,
  },
  base_programme_fields: {
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
  },
  combined_programme_fields: {
    year: "1",
    phase: "primary",
    subject: "Maths",
    year_id: 1,
    phase_id: 2,
    year_slug: "year-1",
    phase_slug: "primary",
    subject_id: 4,
    subject_slug: "maths",
    year_description: "Year 1",
    phase_description: "Primary",
    year_display_order: 2,
    phase_display_order: 2,
    subject_description: "",
    subject_display_order: 22,
  },
});
