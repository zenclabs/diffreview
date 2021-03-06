import { UpdatedDirectory } from "@/api/github/diff";

export interface AppState {
  repo: RepoState | null;
}

export interface RepoState {
  owner: string;
  repo: string;
  pullRequestNumber: number;
  tree: UpdatedDirectory | null;
  selectedFile: SelectedFileState | null;
}

export type SelectedFileState =
  | SelectedFileLoading
  | SelectedFileLoaded
  | SelectedFileFailed;

export interface SelectedFileLoading {
  kind: "loading";
  path: string;
}

export interface SelectedFileLoaded {
  kind: "loaded";
  path: string;
  before: string | null;
  after: string | null;
}

export interface SelectedFileFailed {
  kind: "failed";
  path: string;
}
