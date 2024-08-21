// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type ConversationsJoinResponse = SlackAPIResponse & {
  channel?: Channel;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  warning?: string;
};

export interface Channel {
  context_team_id?: string;
  created?: number;
  creator?: string;
  id?: string;
  internal_team_ids?: string[];
  is_archived?: boolean;
  is_channel?: boolean;
  is_ext_shared?: boolean;
  is_general?: boolean;
  is_group?: boolean;
  is_im?: boolean;
  is_member?: boolean;
  is_moved?: number;
  is_mpim?: boolean;
  is_org_shared?: boolean;
  is_pending_ext_shared?: boolean;
  is_private?: boolean;
  is_shared?: boolean;
  is_starred?: boolean;
  last_read?: string;
  name?: string;
  name_normalized?: string;
  pending_connected_team_ids?: string[];
  pending_shared?: string[];
  previous_names?: string[];
  priority?: number;
  properties?: Properties;
  purpose?: Purpose;
  shared_team_ids?: string[];
  topic?: Purpose;
  unlinked?: number;
  updated?: number;
}

export interface Properties {
  canvas?: Canvas;
  tabs?: Tab[];
}

export interface Canvas {
  file_id?: string;
  is_empty?: boolean;
  quip_thread_id?: string;
}

export interface Tab {
  id?: string;
  label?: string;
  type?: string;
}

export interface Purpose {
  creator?: string;
  last_set?: number;
  value?: string;
}

export interface ResponseMetadata {
  warnings?: string[];
}
