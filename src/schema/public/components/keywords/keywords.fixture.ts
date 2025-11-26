import camelcaseKeys from "camelcase-keys";

import type {
  Keywords,
  KeywordsCamel,
} from "@/schema/public/components/keywords/keywords.schema";

export const keywordsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Keywords>;
} = {}): Keywords => ({
  keyword: "example",
  description: "An example keyword description",
  ...overrides,
});

export const keywordsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<KeywordsCamel>;
} = {}): KeywordsCamel =>
  camelcaseKeys(
    keywordsFixture({
      overrides: overrides as Partial<Keywords>,
    }),
  );
