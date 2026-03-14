declare global {
  interface CloudflareEnv {
    YOUTUBE_API_KEY: { get: () => Promise<string> };
  }
}

export {};
