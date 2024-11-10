# Use a lightweight, official Go image as the base
FROM golang:1.21-alpine AS builder

# Set the working directory inside the image
WORKDIR /app

# Copy the source code to the working directory
COPY . .

# Build the Go application
RUN go build -o main .

# Create a new stage for the production image
FROM alpine:latest

# Copy the built binary from the builder stage
COPY --from=builder /app/main /app/

# Set the working directory
WORKDIR /app

# Expose the port the application will listen on
EXPOSE 8888

# Define the command to run the application
CMD ["./main"]
