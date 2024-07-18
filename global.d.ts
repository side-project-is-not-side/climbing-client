interface WebViewMessageHandler {
  postMessage(message: string): void;
}

declare interface Window {
  ReactNativeWebView?: WebViewMessageHandler;
}
