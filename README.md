# Future Code

A simple Node.js and Express API for product management.

## Features

- Add, update, fetch products
- MongoDB integration
- Basic auth with JWT

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## Setup

1. **Clone the repo**
   - git clone: ` https://github.com/MavithaShehar/-product-api.git`
      

2. **Install dependencies**
   - Command: `npm install` 

2. **Create a .env file with your environment variables**
   - MONGO_URL=your_mongodb_url
   - JWT_SECRET=your_jwt_secret


3. **Start the server**
   - Command:`npm run dev`

## Services 

- You can test these API endpoints using a tool like Postman or Insomnia.

### User

1. **POST - user registore**
    - Endpoint: `http://localhost:3000/api/auth/register`
    - Body:
      ```json
      {
       "username": "name",
       "email": "name@example.com",
       "password": "****",
      }
      ```
2. **POST - user login**
    - Endpoint: `http://localhost:3000/api/auth/login`
    - Point: `get the genarate token`
    - Body:
      ```json
      {
       "email": "name@example.com",
       "password": "****",
      }
      ```


### prodact

1. **POST - Create prodact**
    - Endpoint: `http://localhost:3000/api/products/add`
    - Point: `add the token for Authirization -> Auth Type -> Bearer Token `
    - Body:
      ```json
      {
       "name": "prodact name",
       "price": "nubber",
       "quantity": "nubber"
      }
      ```

2. **GET - Get all prodact**
    - Endpoint: `http://localhost:3000/api/products`
    - Point: `add the token for Authirization -> Auth Type -> Bearer Token `
    - Body:
      ```json
      ```

3. **PUT - Update prodact**
    - Endpoint: `http://localhost:3000/api/products/"add prodact ID`
    - Point: `add the token for Authirization -> Auth Type -> Bearer Token `
    - Body:
      ```json
      {
       "name": "prodact name",
       "price": "nubber",
       "quantity": "nubber"
      }
      ```


4. **GET - prodact get by ID**
    - Endpoint: `http://localhost:3000/api/products/"add prodact ID`
    - Point: `add the token for Authirization -> Auth Type -> Bearer Token `
    - Body:
      ```json
      ```

5. **DELETE - prodact get by ID**
    - Endpoint: `http://localhost:3000/api/products/"add prodact ID`
    - Point: `add the token for Authirization -> Auth Type -> Bearer Token `
    - Body:
      ```json
      ```      






