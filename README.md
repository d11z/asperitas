# asperitas

Asperitas is a full stack reddit clone that I wrote to learn more about Node.js, React, and NoSQL databases. The name asperitas comes from a type of [cloud](https://en.wikipedia.org/wiki/Asperitas_(cloud)).

## Installation

### Prerequisites

* node
* npm
* mongodb 

1. Clone this repository

2. Install server dependencies
    ```bash
    cd server
    npm install
    ```
3. Install client dependencies
    ```bash
    cd client
    npm install
    ```

## Run the app

Ensure you have your mongodb service running locally.
```bash
mongod
```

1. Start the server
    ```bash
    cd server
    npm start
    ```
2. Start the client
    ```bash
    cd client
    npm start
    ```
3. Browse [`http://localhost:3000/`](http://localhost:3000/)


## Testing

### Server
Make sure mongodb is running before testing the server.
```bash
$ cd server
$ npm test
```

### Client
```bash
$ cd client
$ npm test
```

## Deployment

### With Vercel

This requires you to have a [Vercel](https://vercel.com/) account

#### Get a mongoDB instance
- Sign up for MongoDB at https://www.mongodb.com
- Create a mongoDB instance, and copy its connection url. It should look something like:
  ```
  mongodb+srv://myuser:<password>@acoreddit.4...
  ```
  _Remember to replace \<password\> and \<db_name> in the connection string._

#### Set Vercel secret
Install [Vercel CLI](https://vercel.com/download) if you haven't got that already

```bash
npm i -g vercel
vercel login
```

Add mongoDB URI from the step above as a secret on your account

```
vercel secrets add asperitas-database-url "mongodb+srv://myuser..." 
```

Now, if you **haven't cloned this repo**, you can continue by clicking the deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftomfa%2Fasperitas)

_This will take you through a wizard and create your own repository._

Otherwise, you might **have cloned this repo locally**, you're better off following these steps:

```bash
cd ./myrepo  # location of your repository
vercel
? Set up and deploy “~/repos/asperitas”? [Y/n] y
? Which scope do you want to deploy to? <My Name>
? Link to existing project? [y/N] n
? What’s your project’s name? my-asperitas-clone
? In which directory is your code located? ./
``` 

Things should start deploying!

#### Running Vercel locally

```bash
# Set the env variable
echo DATABASE_URL=mongodb://localhost/reddit >> .env

# Run frontend + api locally
vercel dev
```

## License

This project is made available under the **MIT License**.
