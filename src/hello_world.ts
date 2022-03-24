import * as http from "http";

class Main {
  private port: number;

  constructor(port: number) {
    // ポートを設定
    this.port = port;
    // httpサーバーを設定する
    const server: http.Server = http.createServer(
      (request: http.IncomingMessage, response: http.ServerResponse) =>
        this.requestHandler(request, response)
    );
    // サーバーを起動してリクエストを待ち受け状態にする
    server.listen(`${this.port}`);
    // ログを出力する
    console.log(`http://localhost:${this.port} へアクセスください`);
  }

  /**
   * サーバーにリクエストがあった時に実行される関数
   */
  private requestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.end("Hello! Node.js with TypeScript");
  }
}

new Main(5000);
