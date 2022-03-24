"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class Main {
    constructor(port) {
        // ポートを設定
        this.port = port;
        // httpサーバーを設定する
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen(`${this.port}`);
        // ログを出力する
        console.log(`http://localhost:${this.port} へアクセスください`);
    }
    /**
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(request, response) {
        response.end("Hello! Node.js with TypeScript");
    }
}
new Main(5000);
//# sourceMappingURL=hello_world.js.map