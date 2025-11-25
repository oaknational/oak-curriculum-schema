import type {
  Features,
  FeaturesCamel,
} from "@/schema/public/features/features.schema";
import camelcaseKeys from "camelcase-keys";

const baseFeaturesFixture: Features = {
  pe_practical: true,
};

const baseFeaturesFixtureCamel: FeaturesCamel = camelcaseKeys(
  baseFeaturesFixture,
  { deep: true },
);

export const featuresFixture = (): Features => ({ ...baseFeaturesFixture });

export const featuresFixtureCamel = (): FeaturesCamel => ({
  ...baseFeaturesFixtureCamel,
});

export default featuresFixture;
