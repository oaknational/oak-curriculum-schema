import { describe, expect, it } from "vitest";

import featuresFixture from "@/fixtures/features.fixture";
import { featuresSchema } from "@/schema/features.schema";

describe("actions fixture", () => {
  it("conforms to the schema", () => {
    const l = featuresFixture();
    expect(() => featuresSchema.parse(l)).not.toThrow();
  });
});
