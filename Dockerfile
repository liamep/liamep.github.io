# Bruk en offisiell Nginx-bilde som base
FROM nginx:alpine

# Kopier index.html til Nginx sin standard katalog
COPY index.html /usr/share/nginx/html/index.html