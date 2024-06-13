// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type CanvasesAccessSetResponse = SlackAPIResponse & {
  error?: string;
  failed_to_update_channel_ids?: string[];
  failed_to_update_user_ids?: string[];
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface ResponseMetadata {}
