# bep

**The Book Exchange Platform (BEP)** is a full-stack web application designed to connect book enthusiasts and facilitate the swapping of books between book lovers. . It enables users to sell and exchange all sorts of books securely, fostering a community of readers.

**Getting Started**
Follow these steps to set up and run the platform locally.

**1. Prerequisites**
Visual Studio Code: Install and open the project folder in VS Code using:
code .
**Node.js and npm:** Ensure Node.js is installed to manage dependencies.

**2. Frontend Setup**

**a. Create the frontend project:**
npx create-react-app bep-wip

Alternatively, use Vite for a faster setup:
npm create vite@latest bep-client -- --template react
cd bep-client
npm install
npm run dev

The development server will run at:

**Local: **http://localhost:5173/

b. Install and integrate **TailwindCSS:**
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

**3. Backend Setup**

**a. Initialize the backend:**
