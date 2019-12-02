<!--
*** Thanks for checking out this README Template. This template is for user guidance and detail about this project
-->

<!-- ABOUT THE PROJECT -->

## About The Project

This application is a part of assignment where a person can share picture among other users. The application was focused on sharing animal and birds picture with additional information like GPS location, published date, picture date, notes and rarity of animal.

## Built With

This is MERN application. The major stacks that are used to develop projects are as follows

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Mongodb](https://www.mongodb.com/)
- [Express](https://expressjs.com/)

There various libraries which are used in this project like MDBReact, momentjs,bootstrap, etc.

## Prerequisites

In order to run this, you should have node in your device. For Database, user mlab (for cloud storage) or mongodb (for local storage). Similarly, For storing and sjaring picture, you should have cloudinary api keys, which you can get free by registering at there [website](https://cloudinary.com/).

You can download and install requirements from the following links:

- [Node](https://nodejs.org/en/)
- [Mongodb](https://www.mongodb.com/) or [Mlab](https://www.mlab.com/)
- [Cloudinary](https://cloudinary.com/)

## Installation

#### Backend Installation

1. Get a free API Key at [Cloudinary](https://cloudinary.com/)
2. Clone the repo

```sh
git clone https://github.com/dhirajko/Observation_assignment.git
```

3. After download, move in to backend folder and create .env file and fill your details:

```sh
DB_URI= YOUR_DATABASE_URI
CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
API_KEY=YOUR_CLOUDINARY_API_KEY
API_SECRET=YOUR_CLOUDINARY_API_SECRET
PORT=5000
```

Now save and close file.

4. Now install package.json of backend folder

```sh
npm install
```

5. Now run backend with following command.

```sh
node index.js
```

Server part is completed. I have also deployed my backend in heroku. The api of my backend is [https://cgi-assignment.herokuapp.com/](https://cgi-assignment.herokuapp.com/)

#### Frontend Installation

6. Go to client folder and install package.json file with following command

```sh
npm install
```

7. When installation finished. Run following command.

```sh
npm install
```

If you want to run from deployed backend in heroku then go to following location and open appConfig.js

client > src > constant > appConfig.js

replace the code with following code. Save and run client.

```JS
export const API_URL = "https://cgi-assignment.herokuapp.com/";
//export const API_URL = "http://localhost:5000/";

```

The complete installation video. [click](https://cgi-assignment.herokuapp.com/)

## App Demo Link

[https://observation.netlify.com/](https://observation.netlify.com/)


## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

