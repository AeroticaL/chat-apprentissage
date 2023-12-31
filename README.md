
# Chat-Apprentissage

Welcome to Chat-Apprentissage, an interactive chat application designed to facilitate efficient and engaging communication.

## Getting Started

These instructions will guide you through the setup process to get Chat-Apprentissage running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

To set up Chat-Apprentissage, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AeroticaL/chat-apprentissage.git
   cd chat-apprentissage
   ```

2. **Server Setup**

   Navigate to the server directory:

   ```bash
   cd server
   ```

   Install server dependencies:

   ```bash
   yarn
   ```

   Start the server:

   ```bash
   yarn start
   ```

   After installation, configure your server settings. This typically involves setting up environment variables, database connections, and other necessary services.

   Make sure to review and edit the `.env` file located in the server directory to match your local or production environment settings.

3. **Client Setup**

   In a separate terminal window, navigate to the public (client) directory from the root of the project:

   ```bash
   cd ../public
   ```

   Install client dependencies:

   ```bash
   yarn
   ```

   Start the client:

   ```bash
   yarn start
   ```

   The client interface should now be accessible through your web browser. By default, it is usually available at `http://localhost:3000`, but this can vary based on your setup.

### Configuration

Configure the client by editing the `.env` file in the public directory. Ensure that all necessary API endpoints and other relevant settings are correctly set up.

## Usage

With both the server and client running, access the chat interface through your web browser. The default URL for the client is typically `http://localhost:3000`. Start engaging with users and enjoy the features of Chat-Apprentissage!

## Contributing

We appreciate contributions of all forms to Chat-Apprentissage. If you have suggestions for improvement, bug reports, or new features, feel free to contribute. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing.

## License

This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute it under the terms of the MIT License.
