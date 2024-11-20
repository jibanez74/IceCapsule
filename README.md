# IceCapsule

IceCapsule is an open-source, modern, and secure file storage and sharing platform designed to replace traditional cloud solutions like Google Drive. Built using cutting-edge web technologies, IceCapsule prioritizes user privacy and data security, offering a fully self-hosted solution for individuals and organizations.

## Features

- **Modern UI**: Responsive and accessible interface built with **Next.js 15**, **TypeScript**, and **TailwindCSS**.
- **Secure Backend**: Powered by **Appwrite**, ensuring data security and user authentication.
- **Self-Hosted**: Includes a **Docker Compose** setup to deploy Appwrite locally, keeping your data under your control.
- **Scalable**: Optimized for performance and designed to scale with your needs.
- **Customizable**: Fully open-source, allowing you to tailor the platform to fit your requirements.

## Technology Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/) for a fast, scalable, and type-safe application.
- **Styling**: [TailwindCSS](https://tailwindcss.com/) for clean, modern, and customizable design.
- **Backend**: [Appwrite](https://appwrite.io/) provides secure, self-hosted backend functionality for authentication, database, and file storage.
- **Containerization**: [Docker Compose](https://docs.docker.com/compose/) for easy deployment and self-hosting.

## Repository Structure

The repository is structured as follows:

- **IceCapsule/**: Contains the Next.js 15 frontend code.
- **appwrite/**: Contains the Docker Compose configuration for setting up the Appwrite backend.

GitHub Repository: [https://github.com/jibanez74/IceCapsule.git](https://github.com/jibanez74/IceCapsule.git)

## Project Status and Roadmap

### Current Version: 1.0

IceCapsule is currently in active development and is in its **Version 1.0** release. This initial version includes the following features:

1. **File Storage**: Securely store your files with optional encryption.
2. **File Sharing**: Share files seamlessly among users.
3. **Global Search**: Quickly locate files by name using a global search functionality.
4. **Passwordless Authentication**: Authenticate using OTP (One-Time Password) for a more secure and user-friendly experience.

### Upcoming Version: 1.5

The next planned release, **Version 1.5**, will introduce the following features:

1. **Folder Structure**: Organize files into a hierarchical folder system for better management.
2. **Advanced Search**: Enhanced search capabilities to locate files more efficiently.
3. **Google and Apple Authentication**: Support for signing in with Google and Apple accounts for a seamless authentication experience.

Stay tuned for updates as we continue to enhance IceCapsule!

## Getting Started

Follow these steps to set up IceCapsule on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22x recomemnded))
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jibanez74/IceCapsule.git
   cd IceCapsule/web
   ```

2. **Install node modules:**

   ```bash
   npm install
   ```

3. **Set up the backend with Docker Compose:**

   ```bash
   cd ../appwrite
   docker-compose up -d
   ```

4. **Configure the frontend:**

   - Create a `.env.local` file in the `IceCapsule` directory.
   - Add your Appwrite env variables:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

6. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Self-Hosting Appwrite

Appwrite is included in the project as a Docker Compose configuration to ensure all data remains secure and self-hosted. This setup provides:

- Secure authentication
- File and database storage
- Built-in API for managing data and users

The Docker Compose file includes:

- **Appwrite server**
- **Database (MariaDB/PostgreSQL)**
- **Storage (MinIO or local)**

Refer to the [Appwrite documentation](https://appwrite.io/docs) for advanced configuration.

## Contributing

Contributions are welcome! If you have ideas, feature requests, or find bugs, feel free to:

- Open an issue on [GitHub](https://github.com/jibanez74/IceCapsule/issues)
- Submit a pull request

## License

IceCapsule is licensed under the **[GPL v2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)**.

## About BlindPenguin

**BlindPenguin** is a software development company specializing in:

- Full Stack Web Development
- Mobile Development
- Linux Server Administration
- WordPress development
- IT or Development Consulting

Visit our website: [https://blindpenguincoder.com](https://blindpenguincoder.com)  
For inquiries, contact us at: **contactus@blindpenguincoder.com**

We look forward to working with you to create innovative software solutions!
