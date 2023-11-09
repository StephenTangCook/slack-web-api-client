// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type ToolingTokensRotateResponse = SlackAPIResponse & {
  error?: string;
  exp?: number;
  iat?: number;
  needed?: string;
  ok: boolean;
  provided?: string;
  refresh_token?: string;
  response_metadata?: ResponseMetadata;
  team_id?: string;
  token?: string;
  user_id?: string;
};

export interface ResponseMetadata {
  messages?: string[];
}
