# Use a lightweight image of the nginx web server
FROM nginx:alpine

# Copy the contents of the website directory into the container
COPY . /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 8000

# Start nginx web server in the foreground
CMD ["nginx", "-g", "daemon off;"]
