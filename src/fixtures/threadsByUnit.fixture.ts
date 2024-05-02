import { ThreadsByUnit } from "@/schema/threadsByUnit.schema";

export const threadsByUnitFixture = ({
  overrides = {},
}: {
  overrides?: Partial<ThreadsByUnit>;
} = {}): ThreadsByUnit => ({
  unit_id: 1,
  threads: [
    { themeSlug: "theme-slug-1", themeTitle: "theme-title-2" },
    { themeSlug: "theme-slug-2", themeTitle: "theme-title-2" },
  ],
  ...overrides,
});
