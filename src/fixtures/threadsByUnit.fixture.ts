import { ThreadsByUnit } from "@/schema/threadsByUnit.schema";

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
