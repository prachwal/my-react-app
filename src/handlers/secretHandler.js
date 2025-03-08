// secretHandler.js
module.exports = function handleSecretRequest(req, res) {
  if (req.client.authorized) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Welcome to the secret area!");
  } else {
    res.writeHead(401, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Unauthorized");
  }
};
