import type {
  ImageObject,
  ImageObjectCamel,
  ImageItem,
  ImageItemCamel,
  TextItem,
  TextItemCamel,
} from "@/schema/public/imageTextItems/imageTextItems.schema";
import camelcaseKeys from "camelcase-keys";

export const imageObjectFixture = ({
  overrides = {},
}: { overrides?: Partial<ImageObject> } = {}): ImageObject => ({
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
  ...overrides,
});

export const imageObjectFixtureCamel = ({
  overrides = {},
}: { overrides?: Partial<ImageObjectCamel> } = {}): ImageObjectCamel => ({
  ...camelcaseKeys(imageObjectFixture(), { deep: true }),
  ...overrides,
});

export const imageItemFixture = ({
  overrides = {},
}: { overrides?: Partial<ImageItem> } = {}): ImageItem => ({
  image_object: imageObjectFixture(),
  type: "image",
  ...overrides,
});

export const imageItemFixtureCamel = ({
  overrides = {},
}: { overrides?: Partial<ImageItemCamel> } = {}): ImageItemCamel => ({
  ...camelcaseKeys(imageItemFixture(), { deep: true }),
  ...overrides,
});

export const textItemFixture = ({
  overrides = {},
}: { overrides?: Partial<TextItem> } = {}): TextItem => ({
  text: "Hello, World!",
  type: "text",
  ...overrides,
});

export const textItemFixtureCamel = ({
  overrides = {},
}: { overrides?: Partial<TextItemCamel> } = {}): TextItemCamel => ({
  ...camelcaseKeys(textItemFixture(), { deep: true }),
  ...overrides,
});

export const textAndImageItemFixture = ({
  overrides = [],
}: {
  overrides?: Array<TextItem | ImageItem>;
} = {}): Array<TextItem | ImageItem> => [
  imageItemFixture(),
  textItemFixture({ overrides: { text: "This is a text item." } }),
  ...overrides,
];

export const textAndImageItemFixtureCamel = ({
  overrides = [],
}: {
  overrides?: Array<TextItemCamel | ImageItemCamel>;
} = {}): Array<TextItemCamel | ImageItemCamel> => [
  imageItemFixtureCamel(),
  textItemFixtureCamel({ overrides: { text: "This is a text item." } }),
  ...overrides,
];
