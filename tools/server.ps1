# Ustaw ścieżkę do OpenSSL, jeśli nie jest w PATH (dostosuj ścieżkę)
$openssl = "C:\Program Files\OpenSSL-Win64\bin\openssl.exe"

# Generuj klucz prywatny dla serwera
& $openssl genrsa -out .\certs\server.key 2048

# Generuj CSR (Certificate Signing Request) dla serwera
& $openssl req -new -key .\certs\server.key -out .\certs\server.csr -subj "/C=PL/ST=Mazowieckie/L=Warsaw/O=Home/CN=localhost"

# Podpisz CSR za pomocą Root CA (ważny przez 500 dni)
& $openssl x509 -req -in .\certs\server.csr -CA .\certs\rootCA.crt -CAkey .\certs\rootCA.key -CAcreateserial -out .\certs\server.crt -days 500 -sha256