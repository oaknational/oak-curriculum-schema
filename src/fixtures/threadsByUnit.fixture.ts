import type {
  ThreadsByUnit,
  ThreadsByUnitCamel,
} from "@/schema/threadsByUnit.schema";
import camelcaseKeys from "camelcase-keys";

const baseThreadsByUnitFixture: ThreadsByUnit = {
  unit_id: 1,
  threads: [
    { theme_slug: "theme-slug-1", theme_title: "theme-title-2" },
    { theme_slug: "theme-slug-2", theme_title: "theme-title-2" },
  ],
};

const baseThreadsByUnitFixtureCamel: ThreadsByUnitCamel = camelcaseKeys(
  baseThreadsByUnitFixture,
  { deep: true },
);

export const threadsByUnitFixture = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadsByUnit>;
} = {}): ThreadsByUnit => ({
  ...baseThreadsByUnitFixture,
  ...overrides,
});

export const threadsByUnitFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadsByUnitCamel>;
} = {}): ThreadsByUnitCamel => ({
  ...baseThreadsByUnitFixtureCamel,
  ...overrides,
});
