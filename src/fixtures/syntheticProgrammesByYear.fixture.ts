import type {
  SyntheticProgrammesByYear,
  SyntheticProgrammesByYearCamel,
} from "@/schema/published/syntheticProgrammesByYear/syntheticProgrammesByYear.schema";
import { programmeFieldsFixture } from "./programmeFields.fixture";
import camelcaseKeys from "camelcase-keys";

const baseSyntheticProgrammesByYearFixture: SyntheticProgrammesByYear = {
  year_slug: "year-1",
  base_slug: "maths-primary-year-1",
  programme_slug: "maths-primary-year-1",
  is_legacy: false,
  programme_fields: programmeFieldsFixture(),
};

export const syntheticProgrammesByYearFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticProgrammesByYear>;
} = {}): SyntheticProgrammesByYear => ({
  ...baseSyntheticProgrammesByYearFixture,
  ...overrides,
});

export const syntheticProgrammesByYearFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticProgrammesByYearCamel>;
} = {}): SyntheticProgrammesByYearCamel =>
  camelcaseKeys(
    {
      ...baseSyntheticProgrammesByYearFixture,
      ...overrides,
    },
    { deep: true },
  ) as SyntheticProgrammesByYearCamel;
