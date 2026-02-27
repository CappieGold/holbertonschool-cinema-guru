# Holberton School - Cinema Guru

![Cinema Guru](src/assets/Cinema-guru.png)

## Introduction

In this project we built a pocket movie app in which we keep track of our favorite movies and set up a watch later list. We used ReactJs knowledge accumulated in previous projects to build the interface and show data from an API.

## Learning Objectives

- Manage state and props in a React component
- Use React hooks to achieve certain behavior
- Implement a design with JSX and CSS (React)
- Implement a frontend app with React

## Requirements

- Class components are not allowed
- ES6 features used throughout the project
- Package manager: **yarn** (not npm)
- Build tool: **Vite**

## Read or Watch

- [Vite | docs](https://vitejs.dev/guide/)
- [React Hooks](https://react.dev/reference/react)
- [React Font Awesome](https://docs.fontawesome.com/web/use-with/react/)
- [React Router](https://reactrouter.com/)
- [axios](https://axios-http.com/)
- [ES6](https://www.w3schools.com/js/js_es6.asp)
- [JWT Authentication](https://jwt.io/introduction)

## Setting Up the Backend

### Installing Docker

Follow the [official Docker installation guide](https://docs.docker.com/get-docker/) for your system.

### Installing Docker Compose

Follow the [official Docker Compose installation guide](https://docs.docker.com/compose/install/).

> Make sure that Docker is running before proceeding.

### Cloning and Running the Backend Server

```bash
cd backend
docker-compose build --no-cache --force-rm
docker-compose up
```

After running the above commands, the backend API will be available at `http://localhost:8000/`.

## Setting Up the Frontend

```bash
yarn install
yarn dev
```

The frontend will be available at `http://localhost:3000/`.

Vite is configured to proxy `/api` requests to `http://localhost:8000`.

## Notes

- Base URL for API routes: `http://localhost:8000/`
- The backend repository contains detailed information about each route in the API
- Web page title: **Holberton - Cinema guru**

## Packages

| Package | Version |
|---------|---------|
| react | ^18.3.1 |
| react-dom | ^18.3.1 |
| react-router-dom | ^7.6.2 |
| @fortawesome/fontawesome-svg-core | 6.7.0 |
| @fortawesome/free-solid-svg-icons | 6.7.0 |
| @fortawesome/react-fontawesome | 0.2.2 |
| axios | 1.7.7 |
| lodash | 4.17.21 |
| normalize.css | 8.0.1 |

## Project Structure

```
public/
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
├── assets/
│   └── Cinema-guru.png
├── components/
│   ├── Activity.jsx
│   ├── components.css
│   ├── general/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SelectInput.jsx
│   │   └── general.css
│   ├── movies/
│   │   ├── Filter.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Tag.jsx
│   │   └── movies.css
│   └── navigation/
│       ├── Header.jsx
│       ├── SideBar.jsx
│       └── navigation.css
└── routes/
    ├── auth/
    │   ├── Authentication.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   └── auth.css
    └── dashboard/
        ├── Dashboard.jsx
        ├── HomePage.jsx
        ├── Favorites.jsx
        ├── WatchLater.jsx
        └── dashboard.css
```

## Features

### Authentication
- **Sign In / Sign Up** tabs with toggle switching
- JWT token stored in localStorage
- Auto-login on page refresh via token verification

### Dashboard
- **Fixed header** with Cinema Guru title, user avatar, welcome message, and logout
- **Collapsible sidebar** (60px → 280px on hover) with navigation and latest activities

### Home Page
- **Advanced search** with filters: min/max year, genre tags, sort order, text search
- **Movie cards grid** displaying poster, title, synopsis, and genre tags
- **Favorite / Watch Later** toggle icons on each card
- **Load More** pagination button

### Favorites Page
- Displays all movies marked as favorite in a card grid

### Watch Later Page
- Displays all movies marked as watch later in a card grid

## Author
[Jérémy CARPENTIER] (https://github.com/CappieGold)
