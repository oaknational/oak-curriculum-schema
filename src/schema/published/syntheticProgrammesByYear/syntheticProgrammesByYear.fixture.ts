import type {
  SyntheticProgrammesByYear,
  SyntheticProgrammesByYearCamel,
} from "@/schema/published/syntheticProgrammesByYear/syntheticProgrammesByYear.schema";
import { programmeFieldsFixture } from "@/schema/public/programmeFields/programmeFields.fixture";
import camelcaseKeys from "camelcase-keys";

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
  ...overrides,
});

export const syntheticProgrammesByYearFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticProgrammesByYearCamel>;
} = {}): SyntheticProgrammesByYearCamel => ({
  ...camelcaseKeys(syntheticProgrammesByYearFixture(), { deep: true }),
  ...overrides,
});
