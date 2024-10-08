# GitHub User & Repository Viewer

A web application that connects to the GitHub API to display users and their public repositories.

## Tech Stack

- **Frontend:**

  - ReactJS
  - Vite
  - Tailwind CSS
  - React Query
  - Zustand
  - Vitest
  - Storybook

- **Backend and for deployment:**
  - NodeJS (v20.11.0)
  - Docker (v20.10)
  - Render.com

## Features

- View GitHub users and their public repositories.
- Responsive design using Tailwind CSS.
- State management with Zustand.
- Data fetching with React Query.
- Interactive components showcased in Storybook.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/you3h/browse-github-users.git
   cd browse-github-users
   ```
2. Create a .env file in the root directory and add your GitHub token:
   ```bash
    VITE_GITHUB_TOKEN=your_github_token_here
   ```
3. Install the dependencies
   ```bash
    npm install
   ```
4. Start the development server:
   ```bash
    npm run dev
   ```
5. To run Storybook, use the following command:

   ```bash
    npm run storybook
   To run the project in Docker mode

   ```

6. Build the Image
   ```bash
   docker build --build-arg VITE_GITHUB_TOKEN=<your-github-token> -t my-app .
   ```
7. Run the Docker Image
   ```bash
   docker run -p 8000:8000 --name my-app-container my-app
   ```

## License

This project is licensed under the MIT License.
