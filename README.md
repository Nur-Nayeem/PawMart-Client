# PawMart 🐾

## Project Overview

PawMart is a modern React-based marketplace for pets and pet-related products, designed to help pet lovers adopt pets, buy pet food, accessories, and care products, all in one place.

## Project Image

<img src="https://i.ibb.co.com/dJWhm3sm/rsz-1screenshot-from-2025-11-19-00-29-02.jpg" width="100%" height="350" />

## Main Features

- **Multiple Categories:**

  - **Pets** – Browse pets available for adoption (adoption price is free).
  - **Pet Food** – Purchase various types of pet food.
  - **Accessories** – Find toys, collars, beds, and more.
  - **Pet Care Products** – Shop for grooming and health products.

- **User Authentication:**

  - Secure login and signup using **Firebase Email & Password**.
  - **Google Sign-In** integration for faster login.

- **CRUD Operations:**

  - Authenticated users can **create, update, and delete** their listings.
  - Users can place **orders** or adopt pets securely.

- **Additional Features:**
  - Order reports (PDF) generation.

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth (Email/Password & Google)

## 📦 NPM Packages Used

- tailwindcss
- daisyui
- react-router
- firebase
- swiper
- framer motion
- react-icons
- axios
- SweetAlert2
- jspdf-autotable
- Typewriter

## How to Run Locally

1. Clone these repository:

   ```bash
   git clone https://github.com/Nur-Nayeem/PawMart-Client-Assignment-10-Programming-Hero.git

   git clone https://github.com/Nur-Nayeem/PawMart-Server-Assignment-10-Programming-Hero.git

   ```

2. Install dependencies:

   ```bash
   cd PawMart-Client-Assignment-10-Programming-Hero && npm install

   cd PawMart-Server-Assignment-10-Programming-Hero && npm install
   ```

3. Add .env in client and server folder with Firebase Admin credentials and MongoDB URI.

client (.env):

```bash
  VITE_FB_apiKey=your-firebase-api-key
  VITE_FB_authDomain=your-firebase-authDomain
  VITE_FB_projectId=your-firebase-projectId
  VITE_FB_storageBucket=your-firebase-storageBucket
  VITE_FB_messagingSenderId=your-firebase-messagingSenderId
  VITE_FB_appId=your-firebase-appId
```

Server (.env):

```bash
   PORT=your-port
   MONGODB_URI=your-mongodb-uri
   FIREBASE_SERVICE_KEY= (base64 encoded JSON)
```

4. Start server:
   ```bash
   node index.js
   ```
5. Start client:

   ```bash
   npm run dev
   ```

### **🌍 Live Website:** [PawMart Website](https://pawsmart-79833.web.app)

### **💻 Client GitHub Repo:** [Client Repo](https://github.com/Nur-Nayeem/PawMart-Client-Assignment-10-Programming-Hero)

### **🛢️ Server GitHub Repo:** [Server Repo](https://github.com/Nur-Nayeem/PawMart-Server-Assignment-10-Programming-Hero)
