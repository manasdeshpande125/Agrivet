# Use an official Node.js runtime as a parent image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a smaller, production-ready image
FROM nginx:alpine

# Copy the build output from the build stage to the nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Define the command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]



