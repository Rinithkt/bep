### **Book Exchange Platform**

The **Book Exchange Platform (BEP)** is a full-stack web application designed to connect book enthusiasts and facilitate the swapping of books between book lovers. . It enables users to sell and exchange all sorts of books securely, fostering a community of readers.

![UIwireframe](https://github.com/user-attachments/assets/87cd3dd7-492a-4606-b1e2-7293f50bd578)
Here is the UI/UX wireframe for the Book Exchange Platform, showcasing the key screens as outlined.

## **Getting Started**

Follow these steps to set up and run the platform locally.

## 1. Prerequisites
+ **Visual Studio Code:** Install and open the project folder in VS Code using:
  code .
+ **Node.js and npm:** Ensure Node.js is installed to manage dependencies.


## 2. Frontend Setup

**a. Create the frontend project:**
  npx create-react-app bep-wip

Alternatively, use **Vite** for a faster setup:
  npm create vite@latest bep-client -- --template react
  cd bep-client
  npm install
  npm run dev

The development server will run at:

- **Local:** http://localhost:5173/

**b. Install and integrate TailwindCSS:**
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
Reference guides: [TailwindCSS Vite Guide](https://tailwindcss.com/docs/guides/vite)

## 3. Backend Setup

**a. Initialize the backend:**
  mkdir bep-server
  cd bep-server
  npm init -y

**b. Install dependencies:**
npm install express cors mongodb nodemon

**c. Start the server:**
- Add a index.js file with a simple Express app setup.
- Run:
  npm start

+ Backend server will run at:
- + **Local:** http://localhost:5000/

**d. Test the setup using** **Postman:**

- **GET:** http://localhost:5000/ to verify the default response.
- **POST:** http://localhost:5000/upload-book (in JSON format) to add a book record.


## **4. Database Integration**
- **MongoDB:**
+ Use **MongoDB Atlas** for a cloud-hosted NoSQL database.
+ Set up network access and configure IP permissions.
+ Built-in Role: Atlas Admin.

- **Verify database integration:**
+ Use **Postman ** to test API endpoints like:
+ **GET:** http://localhost:5000/all-books
+ **POST:** Add a book and verify insertion.


## **5. Authentication**
**a. Set up Firebase Authentication:**
- Log in to Firebase and create a new project.
- Copy the configuration code into your frontend project.

**b.Install Firebase:**
  npm install firebase

**c. Implement secure login and registration functionality.**

## **References**
The platform leverages modern tools and frameworks:

- **React** for the frontend:
- + [React Router](https://reactrouter.com/en/main/start/tutorial)
- + [React Icons](https://react-icons.github.io/react-icons/)
- + [SwiperJS](https://swiperjs.com/demos#responsive-breakpoints)
- + [Flowbite React](https://flowbite-react.com/docs/)
- **TailwindCSS** for styling: [TailwindCSS](https://tailwindcss.com/docs/guides/vite)
- **ExpressJS** for backend routing: [Express.js](https://expressjs.com/)
- **Postman** for API testing: [Postman](https://www.postman.com/)
- **MongoDB** for database: [MongoDB Cloud](https://cloud.mongodb.com/)
- **Goodreads** for book data: [Goodreads](https://www.goodreads.com/)

## **Local Development URLs**
- **Frontend:** http://localhost:5173/
- **Backend:** http://localhost:5000/

## **Features**

1. **User Authentication:** Secure login and registration using Firebase.
2. **Book Listing:** Add, edit, and delete book details.
3. **Book Search:** Search for books using filters like genre, location, and availability.
4. **Exchange Requests:** Send, negotiate, and manage book exchange requests.
5. **Responsive Design:** Styled with TailwindCSS.2.

## **MERN Stack**
+ **MongoDB:** Database for book and user data.
+ **ExpressJS:** Backend framework for API development.
+ **React:** Frontend framework for UI.
+ **Node.js:** Server-side runtime for backend logic.

## **Quick Commands**
* **Frontend:**
  cd bep-client
  npm run dev

- **Backend:**
  cd bep-server
  npm start

- **Install dependencies:**
  npm install express cors mongodb nodemon

## **Acknowledgments**
- Modern UI and API references:
- + React Router
- + Postman
- + Goodreads API
- Styling: TailwindCSS
