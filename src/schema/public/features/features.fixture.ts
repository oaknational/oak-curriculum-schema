import type {
  Features,
  FeaturesCamel,
} from "@/schema/public/features/features.schema";
import camelcaseKeys from "camelcase-keys";

export const featuresFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Features>;
} = {}): Features => ({
  pe_practical: true,
  ...overrides,
});

export const featuresFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<FeaturesCamel>;
} = {}): FeaturesCamel => ({
  ...camelcaseKeys(featuresFixture(), { deep: true }),
  ...overrides,
});

export default featuresFixture;
