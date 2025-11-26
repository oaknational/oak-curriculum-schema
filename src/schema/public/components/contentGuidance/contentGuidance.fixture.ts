import camelcaseKeys from "camelcase-keys";

import type {
  ContentGuidance,
  ContentGuidanceCamel,
} from "@/schema/public/components/contentGuidance/contentGuidance.schema";

export const contentGuidanceFixture = ({
  overrides = {},
}: {
  overrides?: Partial<ContentGuidance>;
} = {}): ContentGuidance => ({
  contentguidance_label: "Example label",
  contentguidance_description: "Example description",
  contentguidance_area: "Example area",
  ...overrides,
});

export const contentGuidanceFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ContentGuidanceCamel>;
} = {}): ContentGuidanceCamel =>
  camelcaseKeys(
    contentGuidanceFixture({
      overrides: overrides as Partial<ContentGuidance>,
    }),
  );
