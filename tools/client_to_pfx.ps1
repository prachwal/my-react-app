& "C:\Program Files\OpenSSL-Win64\bin\openssl.exe" pkcs12 -export -out .\certs\client.pfx -inkey .\certs\client.key -in .\certs\client.crt -certfile .\certs\rootCA.crt -passout pass:87tele07