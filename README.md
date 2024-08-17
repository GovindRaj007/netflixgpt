# Netflix-gpt

- create react app --> npx create-react-app netflix-gpt
- configured tailwindcss
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- create sign up user account
- Implement sign in user Api
- created Redux store with userSlice
- Implemented sign out
- update profile
- Get data from TMDB now playing movies list API
- Custom hooks for all fetched movies
- Created movieSlice
- Updated store with movies data
- Planning for MainContainer and secondary container
- Fetched data for Trailer video
- updated store with trailer video data
- Embedded the youtube video and made it autoplay and muted
- Built Secondary component
- Built Movie list
- Built Movie Card
- TMDB Image Cdn url for posters of each movie
- Made the browse page amazing with tailwind css
- Built Gpt Search page
- Built Gpt search bar
- (feature) Multi-language feature in the app
- Integrate

# firebase setup

- create project
  - npm install firebase
  - intialize firebase in file (firebase.js)
- Authentication (email/password)

- Hosting (firebase initialization)
  - npm install -g firebase-tools (to install firebase CLI-command line interface)
  - firebase login (authentication)
  - firebase init (to configure firebase in this project)
  - npm run build
  - firebase deploy

# Features

- Login/Sign up
  - Sign In/Sign up Form
  - redirect to Browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGpt
  - Search Bar
  - Movie suggestions
