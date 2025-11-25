import type {
  ImageObject,
  ImageItem,
  TextItem,
} from "@/schema/public/imageTextItems/imageTextItems.schema"

export const imageObjectFixture = (): ImageObject => ({
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
})

export const imageItemFixture = (): ImageItem => ({
  image_object: imageObjectFixture(),
  type: "image",
})

export const textItemFixture = ({
  overrides = {},
}: { overrides?: Partial<TextItem> } = {}): TextItem => ({
  text: "Hello, World!",
  type: "text",
  ...overrides,
})

export const textAndImageItemFixture = (): Array<TextItem | ImageItem> => [
  imageItemFixture(),
  textItemFixture({ overrides: { text: "This is a text item." } }),
]
