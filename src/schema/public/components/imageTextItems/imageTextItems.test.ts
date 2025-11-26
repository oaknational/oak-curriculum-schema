import { describe, expect, it } from "vitest";

import {
  imageItemFixture,
  imageObjectFixture,
  textItemFixture,
} from "@/schema/public/components/imageTextItems/imageTextItems.fixture";
import {
  imageItemSchema,
  imageObjectSchema,
  textItemSchema,
} from "@/schema/public/components/imageTextItems/imageTextItems.schema";

describe("imageObject fixture", () => {
  it("conforms to the schema", () => {
    const l = imageObjectFixture();
    expect(() => imageObjectSchema.parse(l)).not.toThrow();
  });
});

describe("imageItem fixture", () => {
  it("conforms to the schema", () => {
    const l = imageItemFixture();
    expect(() => imageItemSchema.parse(l)).not.toThrow();
  });

  it("handles empty metadata", () => {
    const l = imageItemFixture();
    l.image_object.metadata = [];
    expect(() => imageItemSchema.parse(l)).not.toThrow();
  });
});

describe("textItem fixture", () => {
  it("conforms to the schema", () => {
    const l = textItemFixture();
    expect(() => textItemSchema.parse(l)).not.toThrow();
  });
});
