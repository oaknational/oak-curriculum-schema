import { SyntheticProgrammesByYear } from "@/schema/syntheticProgrammesByYear.schema";
import { programmeFieldsFixture } from "./programmeFields.fixture";

export const syntheticProgrammesByYearFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticProgrammesByYear>;
} = {}): SyntheticProgrammesByYear => ({
  year_slug: "year-1",
  base_slug: "maths-primary-year-1",
  programme_slug: "maths-primary-year-1",
  is_legacy: false,
  programme_fields: programmeFieldsFixture(),
});
