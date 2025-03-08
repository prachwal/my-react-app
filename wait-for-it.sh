#!/bin/sh
# wait-for-it.sh

host="$1"
shift
cmd="$@"

until nc -z -v -w30 $host 27017
do
  echo "Waiting for MongoDB to start..."
  sleep 5
done

echo "MongoDB is up - executing command"
exec $cmd
