# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Todo App

This is a simple todo application built with React and Redux using the Vite build tool.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Navigate to the project directory:
   cd todo-app
3. Install dependencies:
   1)Install Redux Toolkit
      npm install @reduxjs/toolkit
   2) Install Tailwind CSS:
      npm install tailwindcss@latest postcss@latest autoprefixer@latest
   3) Generate your Tailwind CSS configuration file:
      npx tailwindcss init -p

5. Run the App
   Start the development server: npm run dev

6. Open your browser and go to http://localhost:3000 to view the app.

Usage
Add a new todo: Enter the todo title in the input field and press Enter.
Mark a todo as completed: Click on the checkbox next to the todo.
Remove a todo: Click on the delete button (X) next to the todo.
Technologies Used
React
Redux
Vite
Tailwind CSS

Replace `<repository-url>` with the URL of your Git repository. Save this content in a file named `README.md` in the root directory of your project.
