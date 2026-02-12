# SimpleVue Authentication App

This project is a simple web application built with **PHP Laravel** and **Vue.js**, implementing a basic login and registration system with form validation and error handling.

## Stack
- **Backend:** PHP Laravel 11
- **Frontend:** Vue.js 3 (Composition API / Options API), Tailwind CSS
- **Authentication:** Token-based (Sanctum-ready architecture)
- **Database:** SQLite (default for Laravel) or MySQL

## Project Structure & Decisions

### Backend (`app/Http/Controllers/AuthController.php`)
I created a dedicated `AuthController` to handle authentication logic instead of using starter kits like Breeze/Jetstream effectively demonstrating the underlying logic:
- **`register`**: Validates user input (`required`, `email`, `unique`, `confirmed`) and creates a new user. Returns an access token.
- **`login`**: Validates credentials and returns an access token if successful.
- **Validation**: Uses Laravel's built-in `Validator` facade to ensure data integrity. Validation errors are returned as JSON with a 422 status code.

### API Routes (`routes/api.php`)
- `POST /register`: Endpoint for user registration.
- `POST /login`: Endpoint for user login.
- `GET /user`: Secured endpoint (requires valid token) to fetch user details.

### Frontend (`resources/js/`)
The frontend is a Single Page Application (SPA) feel embedded within Laravel's Blade views.
- **`resources/js/app.js`**: Main entry point, setting up Vue Router.
- **`resources/js/router.js`**: Defines routes for Login, Register, and Welcome pages.
- **`resources/js/components/`**:
    - **`Register.vue`**: Handles user registration. Checks password confirmation on client-side before sending. Captures backend validation errors (e.g., "Email already taken") and displays them inline.
    - **`Login.vue`**: Handles user login. Stores the received JWT/Access Token in `localStorage` for ensuring authenticated state across the session.
    - **`Welcome.vue`**: Landing page.

### Styling
- **Tailwind CSS**: Used for rapid, responsive, and clean UI development. The design is kept minimal and professional ("SimpleVue" branding).

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    composer install
    npm install
    ```

2.  **Environment Setup**
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

3.  **Database Migration**
    ```bash
    touch database/database.sqlite
    php artisan migrate
    ```

4.  **Run Development Servers**
    ```bash
    # Terminal 1 (Backend)
    php artisan serve

    # Terminal 2 (Frontend)
    npm run dev
    ```

## Decisions Rationale
- **Manual Auth Implementation**: To satisfy the requirement of "proper validation and binding" and demonstrating understanding of the auth flow rather than relying on auto-generated scaffolds.
- **Axios**: Standard for HTTP requests in Vue/Laravel ecosystem.
- **Token Storage**: Simple `localStorage` implementation for the test task scope. For production, `httpOnly` cookies via Sanctum would be preferred for better security against XSS.

---
**Author**: Ran Bahadur Kc
