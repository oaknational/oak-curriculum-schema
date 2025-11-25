import type {
  ThreadsByUnit,
  ThreadsByUnitCamel,
} from "@/schema/threadsByUnit.schema";
import camelcaseKeys from "camelcase-keys";

export const threadsByUnitFixture = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadsByUnit>;
} = {}): ThreadsByUnit => ({
  unit_id: 1,
  threads: [
    { theme_slug: "theme-slug-1", theme_title: "theme-title-2" },
    { theme_slug: "theme-slug-2", theme_title: "theme-title-2" },
  ],
  ...overrides,
});

export const threadsByUnitFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadsByUnitCamel>;
} = {}): ThreadsByUnitCamel => ({
  ...camelcaseKeys(threadsByUnitFixture(), { deep: true }),
  ...overrides,
});
