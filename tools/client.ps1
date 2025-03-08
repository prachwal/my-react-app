# Ustaw ścieżkę do OpenSSL, jeśli nie jest w PATH (dostosuj ścieżkę)
$openssl = "C:\Program Files\OpenSSL-Win64\bin\openssl.exe"

# Generuj klucz prywatny dla klienta
& $openssl genrsa -out .\certs\client.key 2048

# Generuj CSR dla klienta
& $openssl req -new -key .\certs\client.key -out .\certs\client.csr -subj "/C=PL/ST=Mazowieckie/L=Warsaw/O=Home/CN=client"

# Podpisz CSR za pomocą Root CA (ważny przez 500 dni)
& $openssl x509 -req -in .\certs\client.csr -CA .\certs\rootCA.crt -CAkey .\certs\rootCA.key -CAcreateserial -out .\certs\client.crt -days 500 -sha256