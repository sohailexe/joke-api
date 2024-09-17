# Use the official Node.js image from the Docker Hub
FROM node
# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the app directory
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]