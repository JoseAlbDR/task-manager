export {};

declare global {
  namespace Express {
    interface Request {
      // user: string;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: number;
      DATABASE_URL: string;
    }
  }
}
