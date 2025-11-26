import camelcaseKeys from "camelcase-keys";

import type {
  MisconceptionsAndCommonMistakes,
  MisconceptionsAndCommonMistakesCamel,
} from "@/schema/public/components/misconceptionsAndCommonMistakes/misconceptionsAndCommonMistakes.schema";

export const misconceptionsAndCommonMistakesFixture = ({
  overrides = {},
}: {
  overrides?: Partial<MisconceptionsAndCommonMistakes>;
} = {}): MisconceptionsAndCommonMistakes => ({
  misconception: "Example misconception",
  response: "Example response to misconception",
  ...overrides,
});

export const misconceptionsAndCommonMistakesFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<MisconceptionsAndCommonMistakesCamel>;
} = {}): MisconceptionsAndCommonMistakesCamel =>
  camelcaseKeys(
    misconceptionsAndCommonMistakesFixture({
      overrides: overrides as Partial<MisconceptionsAndCommonMistakes>,
    }),
  );
