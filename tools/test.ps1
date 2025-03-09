# Ścieżka do pliku PFX
$pfxPath = ".\certs\client.pfx"

# Hasło do pliku PFX
$pfxPassword = "87tele07" 

# Importowanie certyfikatu za pomocą konstruktora
Write-Host "Trying to load certificate from: $pfxPath"
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($pfxPath, $pfxPassword)

# Adres URL usługi
$url = "https://localhost:443/secret"

# Wysłanie żądania z certyfikatem klienta
try
{
    $response = Invoke-WebRequest -Uri $url -Certificate $cert -Method Get
    Write-Output "Odpowiedź usługi: $($response.Content)"
}
catch
{
    Write-Output "Błąd: $($_.Exception.Message)"
}