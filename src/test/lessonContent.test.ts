import { describe, expect, it } from "vitest";

import { lessonContentFixture } from "@/fixtures/lessonContent.fixture";
import { lessonContentSchema } from "@/schema/lessonContent.schema";

describe("lessonContent", () => {
  it("conforms to the schema", () => {
    const l = lessonContentFixture();
    expect(() => lessonContentSchema.parse(l)).not.toThrow();
  });
});
