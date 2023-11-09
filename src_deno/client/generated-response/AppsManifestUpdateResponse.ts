// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type AppsManifestUpdateResponse = SlackAPIResponse & {
  app_id?: string;
  error?: string;
  needed?: string;
  ok: boolean;
  permissions_updated?: boolean;
  provided?: string;
};
