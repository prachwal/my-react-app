# Ustaw ścieżkę do OpenSSL, jeśli nie jest w PATH (dostosuj ścieżkę)
$openssl = "C:\Program Files\OpenSSL-Win64\bin\openssl.exe"

# Generuj klucz prywatny dla Root CA
& $openssl genrsa -out .\certs\rootCA.key 2048

# Generuj certyfikat Root CA (ważny przez 1024 dni)
& $openssl req -x509 -new -nodes -key .\certs\rootCA.key -sha256 -days 1024 -out .\certs\rootCA.crt -subj "/C=PL/ST=Malopolskie/L=Krakow/O=Home/CN=Root Certificate Home"