# Ratings & Review System for Products 

A full-stack web application for product ratings and reviews, featuring authentication, photo uploads, tag extraction from reviews, and a modern UI.

---

## 🌐 Live Demo

👉 **[Visit the Website](https://ratings-and-review-system-for-produ.vercel.app/)**

---

## 🗺️ GoogleDocs(ER Daigram)

👉 **[View the ER Diagram (Google Docs)](https://docs.google.com/document/d/1OZXcGsGEhGA9obhLfM4NdZN5eTfhqB-A-zuSU8UL_DQ/edit?usp=sharing)**

---

## 🚀 Features

- **User Authentication:** Sign up, log in, and log out securely (JWT-based).
- **Product Listing:** Browse a catalog of products.
- **Detailed Product Pages:** View product details, average rating, popular tags, and all reviews.
- **Submit Reviews:** Authenticated users can submit one review per product, including a star rating, text, and an optional photo.
- **Popular Tags:** Most-used words from reviews are extracted and displayed as tags.
- **Photo Uploads:** Users can attach images to their reviews.
- **Responsive UI:** Clean, modern, and mobile-friendly interface.

---

## 🗂️ Project Structure

```
rating-review-system/
├── rating-review-backend/   # Express + Sequelize + PostgreSQL backend
├── rating-review-frontend/  # React + Vite frontend
```

---

## 🛠️ Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- **PostgreSQL** database (local or cloud, e.g., Render)
- (Optional) [Git](https://git-scm.com/) for version control

---

## ⚙️ Backend Setup

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd rating-review-system/rating-review-backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` (or edit `.env` directly).
   - Fill in your PostgreSQL credentials and a JWT secret:
     ```
     DB_HOST=your_db_host
     DB_PORT=5432
     DB_NAME=your_db_name
     DB_USER=your_db_user
     DB_PASS=your_db_password
     JWT_SECRET=your_super_secret_key
     ```

4. **Seed the database (optional, recommended for demo/testing):**
   ```sh
   npm run seed
   ```
   This will create demo users, products, and reviews.

5. **Start the backend server:**
   ```sh
   npm run dev
   ```
   The server runs at [http://localhost:5000](http://localhost:5000).

---

## ⚙️ Frontend Setup

1. **Open a new terminal and navigate to the frontend:**
   ```sh
   cd ../rating-review-frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the frontend development server:**
   ```sh
   npm run dev
   ```
   The app runs at [http://localhost:5173](http://localhost:5173).

---

## 🧪 Testing the Application

### 1. **Sign Up & Log In**
- Click **Sign Up** in the header to create a new account.
- Log in with your credentials.

### 2. **Browse Products**
- The home page lists all products.
- Click **View & Review** to see product details.

### 3. **Submit a Review**
- On a product page, fill in your rating, review text, and (optionally) upload a photo.
- Submit your review. You can only review each product once per account.

### 4. **View Reviews & Tags**
- See all reviews (with photos) and the most-used tags for each product.

---

## 📝 API Overview

- **POST /api/auth/signup** — Register a new user
- **POST /api/auth/login** — Log in and receive a JWT
- **GET /api/products** — List all products
- **GET /api/products/:id** — Get product details
- **GET /api/products/:id/reviews** — Get all reviews for a product
- **POST /api/reviews** — Submit a review (JWT required, supports photo upload)
- **GET /api/products/:id/tags** — Get most-used tags from reviews

---

## 🖼️ Demo Users (after seeding)

| Name          | Email                | Password   |
|---------------|----------------------|------------|
| Archit Singh  | archit@example.com   | password1  |
| Priya Sharma  | priya@example.com    | password2  |
| Rahul Verma   | rahul@example.com    | password3  |
| Sneha Patel   | sneha@example.com    | password4  |

---

## 🛡️ Security Notes

- **Never commit your `.env` file** or secrets to version control.
- If you accidentally pushed secrets, rotate them immediately.
- Passwords are hashed using bcrypt.
- JWT is used for authentication; keep your `JWT_SECRET` safe.

---

## 🧹 Cleaning Up

- To reset the database, run:
  ```sh
  npm run seed
  ```
- To remove uploaded review images, delete files in `rating-review-backend/uploads/`.

---

## 📦 Deployment

- Deploy the backend (Express) to [Render](https://render.com/), [Heroku](https://heroku.com/), or similar. I have deployed it on Render.
- Deploy the frontend (React) to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or similar. I have deployed my frontend on Vercel
- Update API URLs in the frontend if deploying to production.

---

## 🙋 FAQ

**Q: Why can't I submit more than one review per product?**  
A: Each user can only review a product once (enforced by the backend).

**Q: Why can't I see my uploaded photo?**  
A: Make sure the backend is running and serving `/uploads` statically. If deployed, ensure your host supports file uploads.

---

## 👨‍💻 Author

- **Archit Singh**  
  _For questions or feedback, open an issue or contact me._

---

## 📄 License
  
Feel free to use and modify for your own