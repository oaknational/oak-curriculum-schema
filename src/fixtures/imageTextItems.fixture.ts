import {
  ImageObject,
  ImageItem,
  TextItem,
} from "@/schema/imageTextItems.schema";

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
});

export const imageItemFixture = (): ImageItem => ({
  image_object: imageObjectFixture(),
  type: "image",
});

export const textItemFixture = (): TextItem => ({
  text: "Hello, World!",
  type: "text",
});
