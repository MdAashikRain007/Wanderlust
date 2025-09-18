# Wanderlust

> Wanderlust is a full-stack web application to share travel experiences — create posts with photos, explore others’ journeys, and build a travel community.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  

---

## Features

- User can create, read, update, delete travel posts  
- Upload photos/images with posts  
- Displaying posts and images on the frontend  
- Validations for input data (based on `schema.js`)  
- Middleware for handling authentication / validation / errors  
- Organized views using EJS templates  
- Static files (CSS, client-side JS, images) served from `public/`  
- File uploads stored under `uploads/`  

---

## Tech Stack

- **Backend**: Node.js, Express  
- **Templating / Frontend**: EJS  
- **Database**: (you may mention whichever DB you're using; e.g. MongoDB)  
- **Storage**: Local file uploads / cloud (depending on `cloudConfig.js`)  
- **Middleware**: Custom middleware for validating requests etc.  

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
npm install
```

This tells the user that running `npm install` will fetch all dependencies listed in `package.json`.

---

## 2. **Explicit Dependency Section**
List the main dependencies (with versions, if important), so others know what tech stack you use. Example:

```markdown
## Dependencies

This project uses the following main packages:

- [express](https://www.npmjs.com/package/express) - Web framework for Node.js
- [ejs](https://www.npmjs.com/package/ejs) - Templating engine
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ODM
- [multer](https://www.npmjs.com/package/multer) - File upload middleware
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
```
---

## 3. **Add `npm scripts` in README**
So devs know how to run, lint, or test your project:

```markdown
## Available Scripts

- `npm start` → Run in production mode  
- `npm run dev` → Run with nodemon (development mode)  
- `npm run lint` → Lint the code  
- `npm test` → Run tests  

```


