Hey there! 👋
I hope this events page finds you well! I had a lot of fun creating it and learned a lot.
Thank you for taking the time to review my submission. I hope that you enjoy it! :) 
Without further ado, here is what is included in my implementation!  

# Tasks 
- [x] Plan out project structure.
- [x] Create designs for the event page.
- [x] Display events and the information for all events provided when visiting the app
- [x] Sort by start time. 
- [x] Hide private events based on user being logged in logged out.
- [x] Create registration and login authentication.
- [x] Add search/filter functionality

# Setup
1. Clone the repository into your local development environment
3. Install required dependencies by running `npm install` in the project directory. 
4. To start the app run `npm start`
5. Open a new terminal, and run `npx tsx server.tsx`

## Project Structure
`
src
├── App.test.tsx
├── App.tsx
├── api
│   └── axios.tsx
├── assets
│   ├── css
│   │   ├── AuthPage.css
│   │   ├── DetailSpeaker.css
│   │   ├── Details.css
│   │   ├── DetailsModal.css
│   │   ├── Events.css
│   │   ├── MainPage.css
│   │   └── SearchEvents.css
│   └── images
│       ├── background.jpg
│       └── headshot.jpg
├── components
│   ├── Auth
│   │   ├── LoginPage.tsx
│   │   └── RegistrationPage.tsx
│   ├── Events
│   │   ├── Details.tsx
│   │   ├── DetailsModal
│   │   │   ├── DetailsSpeakers.tsx
│   │   │   └── DetailsTime.tsx
│   │   ├── DetailsModal.tsx
│   │   ├── Event.tsx
│   │   └── RelatedEvents.tsx
│   ├── Loader.tsx
│   ├── MainPage.tsx
│   ├── NavBar.tsx
│   └── Search
│       └── SearchEvents.tsx
├── context
│   ├── eventId-context.tsx
│   └── loginState-context.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
└── types
    └── Events.types.tsx
server
├── controller
│   ├── authController.js
│   └── registerController.js
├── model
│   └── users.json
└── routes
    ├── auth.js
    └── register.js
server.tsx
`

- ``:
- `src/assets/css`: styling for events page
- `src/components`: components that make up the events page
- `server/`: contains routing to regster and login endpoints

# Demo 
