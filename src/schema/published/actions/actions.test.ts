import { describe, expect, it } from "vitest";

import actionsFixture from "@/fixtures/actions.fixture";
import { actionsSchema } from "@/schema/published/actions/actions.schema";

describe("actions fixture", () => {
  it("conforms to the schema", () => {
    const l = actionsFixture();
    expect(() => actionsSchema.parse(l)).not.toThrow();
  });
});
