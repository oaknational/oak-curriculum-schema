import type {
  Features,
  FeaturesCamel,
} from "@/schema/public/features/features.schema";
import camelcaseKeys from "camelcase-keys";

export const featuresFixture = (): Features => ({
  pe_practical: true,
});

export const featuresFixtureCamel = (): FeaturesCamel => ({
  ...camelcaseKeys(featuresFixture(), { deep: true }),
});

export default featuresFixture;
