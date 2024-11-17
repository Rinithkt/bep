# bep
Book Exchange Platform

getting started
install visual studio and via project folder type code . to open visual studio code interface.
>> npx create-react-app bep-wip
to create a project

Vite (pronounced as wheat) is a French word for fast!

MERN stands for MongoDB, Express, React, and Node.js, which are the key technologies used in the stack:Together, these technologies enable the development of modern full-stack web applications.

MERN mongoDB, Postman

References used:
https://expressjs.com/
adding router assistance:
https://reactrouter.com/en/main/start/tutorial
used icons from React Icons:
https://react-icons.github.io/react-icons/
used React slide codes, etc from 
https://swiperjs.com/demos#responsive-breakpoints
https://flowbite-react.com/docs/components/footer
used avatars codes from flowbite React
https://flowbite-react.com/docs/components/avatar
used CSS framework from tailwindcss
https://tailwindcss.com/docs/guides/vite
used Postman for getting and posting API workflow request to MondoDB database
used backend DB using MongoDB
https://cloud.mongodb.com/
localhost
BE: http://localhost:5000/
FE: http://localhost:5173/
collection of books fetched from https://www.goodreads.com/
used firebase for authentication

bep-wip > bep-server >
>>npm init
>>index.js
>>npm install express cors mongodb nodemon
(to install packages like express cors mongodb and nodemon)

>>npm start
we should see a default page at http://localhost:5000

go to framework guides and click 'vite'
follow commands
>>npm create vite@latest my-project -- --template react
make sure to select React and Javascript
cd bep-client
>>npm install
>>npm run dev
this will run for ex. Local:   http://localhost:5173/

integration to the Database
https://www.mongodb.com/
Built-in Role: Atlas admin
Network Access>click add ip address > (click allow access from anywhere) (to secure further, refine this if we need to restrict or lock down with IP range location etc

to check if this works and adds a record to the DB lets use Postman API platform
download and install Postman-win64-Setup
created account at postman.com
after login to postman website/ postman client
check GET>localhost:5000 
to see if default Helo World appears
check POST> localhost:5000/upload-book (select from TEXT to JSON format)

go to goodreads.com to get some data about books
https://www.goodreads.com/ 

check http://localhost:5000
http://localhost:5000/all-books

side coding
go to tailwindcss
https://tailwindcss.com/docs/installation

https://tailwindcss.com/docs/guides/vite use this site for tailwindcss install command
>>npm install -D tailwindcss postcss autoprefixer
>>npx tailwindcss init -p


****Authentication system/ Login
Authentication system/ Login
go to firebase
login to https://firebase.google.com/
using gmail a/c and click get started
create a new project in firebase and copy the code in your 
>>npm install firebase (run this from the client side)

