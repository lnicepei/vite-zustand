interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_FIREBASE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
