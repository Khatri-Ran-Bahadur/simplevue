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

**Author**: Ran Bahadur Kc
