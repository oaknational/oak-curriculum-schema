import z from "zod";
import zodToCamelCase from "zod-to-camel-case";

export const baseIngestStatesSchema = z.enum([
  "ingest_started",
  "ingest_complete",
  "ready_to_ingest",
]);
export type BaseIngestStates = z.infer<typeof baseIngestStatesSchema>;

export const baseIngestStatesSchemaCamel = zodToCamelCase(
  baseIngestStatesSchema,
);
export type BaseIngestStatesCamel = z.infer<typeof baseIngestStatesSchemaCamel>;

export const assetIngestStatesSchema = z.enum(["no_asset"]);
export type AssetIngestStates = z.infer<typeof assetIngestStatesSchema>;

export const assetIngestStatesSchemaCamel = zodToCamelCase(
  assetIngestStatesSchema,
);
export type AssetIngestStatesCamel = z.infer<
  typeof assetIngestStatesSchemaCamel
>;

export const videoIngestStatesSchema = z.enum([
  "adding_captions",
  "mux_complete",
  "sent_to_mux",
  "sent_captions_to_mux",
  "mux_transcoded",
  "no_audio",
  "rev_complete",
  "sent_to_rev",
  "rev_skipped",
]);
export type VideoIngestStates = z.infer<typeof videoIngestStatesSchema>;

export const videoIngestStatesSchemaCamel = zodToCamelCase(
  videoIngestStatesSchema,
);
export type VideoIngestStatesCamel = z.infer<
  typeof videoIngestStatesSchemaCamel
>;

export {
  /**
   * @deprecated Use baseIngestStatesSchema instead.
   */
  baseIngestStatesSchema as baseIngestStates,
  /**
   * @deprecated Use assetIngestStatesSchema instead.
   */
  assetIngestStatesSchema as assetIngestStates,
  /**
   * @deprecated Use videoIngestStatesSchema instead.
   */
  videoIngestStatesSchema as videoIngestStates,
};
