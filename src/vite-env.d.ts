/// <reference types="vite/client" />

export type AmeenArtifact = {
  title: string;
  kind:
    | "text"
    | "markdown"
    | "code"
    | "table"
    | "notes"
    | "mermaid"
    | "image"
    | "imageLoading"
    | "thumbnailBoard"
    | "progress";
  content: string;
  language?: string;
  fullscreen?: boolean;
};

export type AmeenToolSpec = {
  type: "function";
  name: string;
  description: string;
  parameters: Record<string, unknown>;
};

export type AmeenToolCall = {
  name: string;
  arguments: Record<string, unknown>;
};

export type AmeenToolResult = {
  ok: boolean;
  artifact?: AmeenArtifact;
  mode?: "display" | "computer";
  message?: string;
  error?: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    ameen: {
      createRealtimeToken: () => Promise<{ value: string; expiresAt: number | null }>;
      executeTool: (toolCall: AmeenToolCall) => Promise<AmeenToolResult>;
      getToolSpecs: () => Promise<AmeenToolSpec[]>;
    };
  }
}
