export {};

declare global {
  interface Window {
    Buffer: string | typeof Buffer;
  }
}
