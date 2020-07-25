const http = require("http");

let server = http
  .createServer((request, response) => {
    switch (request.method) {
      case "GET":
        response.writeHead(200, {
          "Content-Type": "text/plain",
        });
        return response.end("Hello World, Welcome to WeJapa Internships\n");
      case "POST":
        let body = "";
        request.on("data", (chunk) => {
          body += chunk.toString();
        });
        request.on("end", () => {
          response.end(`Hello ${body}, Welcome to WeJapa Internships`);
        });
    }
  })
  .listen(8080);

server.on("request", (request, response) => {
  request.setEncoding("utf8");
  let now = new Date();
  console.log(`Made Request: ${now}`);
  request.on("end", () => console.log(`DONE: ${new Date()}`));
});
