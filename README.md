Welcome to NetflixGPT 👋
NetflixGPT is a web application that leverages the power of OpenAI's GPT-3 to enhance your Netflix experience. With this project, you can:

Generate personalized movie and TV show recommendations based on your preferences.
Engage in natural language conversations to discover new content.
Get detailed information about your favorite shows and movies.
Technologies Used
NetflixGPT is built using a combination of modern web technologies and services:

React: NetflixGPT is primarily built using React, a popular JavaScript library for building user interfaces.
Tailwind CSS: Tailwind CSS is used for efficient and responsive styling, ensuring a seamless user experience across devices.
Redux Toolkit: Redux Toolkit helps manage the application's state, making it easier to handle complex data flows and state changes.
Firebase: Firebase is used for user authentication, ensuring secure access to personalized recommendations and conversation history.
OpenAI GPT-3: The heart of NetflixGPT is powered by OpenAI's GPT-3, which enables natural language understanding and conversation generation.
Features
Personalized Recommendations: Receive movie and TV show recommendations tailored to your interests and preferences.
Natural Language Conversations: Engage in meaningful conversations with the AI to discover new content or get recommendations.
Detailed Information: Access detailed information about movies and TV shows, including cast, ratings, and synopsis.
Secure Authentication: User authentication is handled through Firebase, ensuring your data and interactions are safe and secure.


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
