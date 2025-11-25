import type {
  ImageObject,
  ImageObjectCamel,
  ImageItem,
  ImageItemCamel,
  TextItem,
  TextItemCamel,
} from "@/schema/public/imageTextItems/imageTextItems.schema";
import camelcaseKeys from "camelcase-keys";

const baseImageObjectFixture: ImageObject = {
  format: "png",
  secure_url: "https://res.cloudinary.com/demo/image/upload/sample.png",
  url: "http://res.cloudinary.com/demo/image/upload/sample.png",
  height: 100,
  width: 100,
  metadata: {
    attribution: "author",
    usageRestriction: "free",
  },
  public_id: "sample",
  version: 1234567890,
};

export const imageObjectFixture = (): ImageObject => ({
  ...baseImageObjectFixture,
});

export const imageObjectFixtureCamel = (): ImageObjectCamel =>
  camelcaseKeys(baseImageObjectFixture, { deep: true }) as ImageObjectCamel;

export const imageItemFixture = (): ImageItem => ({
  image_object: imageObjectFixture(),
  type: "image",
});

export const imageItemFixtureCamel = (): ImageItemCamel =>
  camelcaseKeys(
    {
      image_object: imageObjectFixture(),
      type: "image",
    },
    { deep: true },
  ) as ImageItemCamel;

const baseTextItemFixture: TextItem = {
  text: "Hello, World!",
  type: "text",
};

export const textItemFixture = ({
  overrides = {},
}: { overrides?: Partial<TextItem> } = {}): TextItem => ({
  ...baseTextItemFixture,
  ...overrides,
});

export const textItemFixtureCamel = ({
  overrides = {},
}: { overrides?: Partial<TextItemCamel> } = {}): TextItemCamel =>
  camelcaseKeys(
    {
      ...baseTextItemFixture,
      ...overrides,
    },
    { deep: true },
  ) as TextItemCamel;

export const textAndImageItemFixture = (): (TextItem | ImageItem)[] => [
  imageItemFixture(),
  textItemFixture({ overrides: { text: "This is a text item." } }),
];

export const textAndImageItemFixtureCamel = (): (
  | TextItemCamel
  | ImageItemCamel
)[] => [
  imageItemFixtureCamel(),
  textItemFixtureCamel({ overrides: { text: "This is a text item." } }),
];
