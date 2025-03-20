import { AdditionalFiles } from "@/schema/additionalFiles.schema";

export const additionalFilesFixture = ({
  overrides,
}: {
  overrides?: Partial<AdditionalFiles>;
} = {}): AdditionalFiles => ({
  tpc_downloadablefiles: [
    {
      asset_id: 123,
      media_id: 4567,
      media_object: {
        url: "https://www.example.com",
        bytes: 1000,
        display_name: "Display Name",
      },
    },
    {
      asset_id: 456,
      media_id: 7890,
      media_object: {
        url: "https://www.otherexample.com",
        bytes: 45667,
        display_name: "Display Name 2",
      },
    },
  ],
  ...overrides,
});
export default additionalFilesFixture;
