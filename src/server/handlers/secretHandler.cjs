// secretHandler.cjs

module.exports = function handleSecretRequest(req, res) {
  const clientCert = req.socket.getPeerCertificate();

  // Jeśli certyfikat nie został dostarczony lub jest pusty
  if (!clientCert || Object.keys(clientCert).length === 0) {
    // Ponownie negocjujemy TLS, żądając certyfikatu
    req.socket.renegotiate(
      {
        requestCert: true,
        rejectUnauthorized: true, // Odrzucamy, jeśli certyfikat nie jest ważny
      },
      (err) => {
        if (err) {
          console.error("[ERROR] Renegotiation failed:", err);
          req.socket.end(); // Zamykamy połączenie w przypadku błędu
          return;
        }

        const newCert = req.socket.getPeerCertificate();
        if (
          !newCert ||
          Object.keys(newCert).length === 0 ||
          !req.client.authorized
        ) {
          // Jeśli nadal brak ważnego certyfikatu, zamykamy połączenie
          req.socket.end();
        } else {
          // Certyfikat dostarczony i ważny
          respondMessage(req, res);
        }
      },
    );
  } else if (!req.client.authorized) {
    // Jeśli certyfikat jest obecny, ale nieważny, zamykamy połączenie
    req.socket.end();
  } else {
    // Certyfikat jest obecny i ważny od razu
    respondMessage(req, res);
  }
};

function respondMessage(req, res) {
  const cert = req.socket.getPeerCertificate();
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`Welcome to the secret area! Client: ${cert.subject.CN}`);
}
