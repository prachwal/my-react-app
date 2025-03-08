# Ręcznie zatrzymaj i usuń istniejący kontener, jeśli istnieje
$running = docker ps -q -f name=node-container
if ($running)
{
    docker stop node-container
    docker rm node-container
}
else
{
    $exists = docker ps -aq -f name=node-container
    if ($exists)
    {
        docker rm node-container
    }
}

# Zatrzymaj i usuń wszystko związane z Docker Compose (na wszelki wypadek)
docker-compose down -v --rmi all 2>$null

# Odbuduj i uruchom kontener
docker-compose up -d --build --force-recreate

Write-Host "Container updated or already up-to-date"