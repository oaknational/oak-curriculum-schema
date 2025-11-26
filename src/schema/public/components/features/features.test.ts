import { describe, expect, it } from "vitest";

import featuresFixture from "@/schema/public/components/features/features.fixture";
import { featuresSchema } from "@/schema/public/components/features/features.schema";

describe("actions fixture", () => {
  it("conforms to the schema", () => {
    const l = featuresFixture();
    expect(() => featuresSchema.parse(l)).not.toThrow();
  });
});
