Hey there! 👋
I hope this events page finds you well! I had a lot of fun creating it and learned a lot.
Thank you for taking the time to review my submission. I hope that you enjoy it! :) 
Without further ado, here is what is included in my implementation!  

# Tasks 
- Plan out project structure.
- Create designs for the event page.
- Display events and the information for all events provided when visiting the app
- Hide private events based on user being logged in logged out.
- Create registration and login authentication.
- Fix project structure
- Add search/filter functionality

# Setup
1. Clone the repository into your local development environment and navigate to that folder
2. `cd client` and run `npm install`
3. To start the client side, run `npm start` (in client directory)
4. Open a new terminal, `cd server`, and run `npm install` 
5. To start the server side, run `npx nodemon index.js` (in server directory)

# Testing

email: gillian 

password: gillian 

This user already exists in the database. Used to test login functionality and cannot create another same user. 
Can create a new user and test with that as well. 

## Project Structure
- `client`: contains the frontend portion of the application
  - `client/src/assets`: contains images and styling sheets for components
  - `client/src/components`: contains components that form the app
  - `client/src/context`: contains variables used throughout the app
  - `client/src/types`: contains data response formats

- `server`: contains server-side logic for login and registration authentication
  - `server/src/controllers`: contains the requests to endpoints
  - `server/src/model`: contains a mock database for users
  - `server/src/routes`: forms an endpoint for the requests
