# Books Site API Documentation

## Overview
This document outlines the RESTful API endpoints for the Books Site platform. The API provides functionality for user authentication, book browsing, searching, and related features.

## Base URL
```
https://api.books-site.com/v1
```

## Authentication
All authenticated endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## API Endpoints

### Authentication

#### 1. User Registration
Register a new user account.

**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "user": {
    "id": "string",
    "username": "string",
    "email": "string",
    "avatarUrl": "string"
  },
  "token": "string"
}
```

**Error Responses:**
- `400 Bad Request`: Invalid input data
- `409 Conflict`: Email already registered

---

#### 2. User Login
Authenticate user and get access token.

**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:** `200 OK`
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string",
    "avatarUrl": "string"
  }
}
```

**Error Responses:**
- `401 Unauthorized`: Invalid credentials

---

#### 3. User Logout
Invalidate the current session token.

**Endpoint:** `POST /auth/logout`

**Headers Required:** `Authorization`

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### Books Management

#### 1. List Books
Get a paginated list of books with optional filters.

**Endpoint:** `GET /books`

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 10)
category: string (optional)
search: string (optional)
```

**Response:** `200 OK`
```json
{
  "books": [
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "coverUrl": "string",
      "category": "string",
      "description": "string",
      "rating": number,
      "downloadCount": number
    }
  ],
  "pagination": {
    "currentPage": number,
    "totalPages": number,
    "totalItems": number
  }
}
```

---

#### 2. Get Book Details
Get detailed information about a specific book.

**Endpoint:** `GET /books/{id}`

**Response:** `200 OK`
```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "coverUrl": "string",
  "category": "string",
  "description": "string",
  "rating": number,
  "downloadCount": number,
  "fileSize": "string",
  "format": "string",
  "language": "string",
  "publishDate": "string",
  "isbn": "string",
  "pages": number,
  "downloadOptions": [
    {
      "format": "string",
      "url": "string",
      "size": "string"
    }
  ]
}
```

**Error Responses:**
- `404 Not Found`: Book not found

---

#### 3. Get Related Books
Get books related to a specific book.

**Endpoint:** `GET /books/{id}/related`

**Query Parameters:**
```
limit: number (default: 5)
```

**Response:** `200 OK`
```json
{
  "books": [
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "coverUrl": "string",
      "category": "string"
    }
  ]
}
```

---

#### 4. Get Book Categories
Get list of available book categories.

**Endpoint:** `GET /categories`

**Response:** `200 OK`
```json
{
  "categories": [
    {
      "id": "string",
      "name": "string",
      "icon": "string",
      "bookCount": number
    }
  ]
}
```

---

#### 5. Search Books
Search books by title, author, or description.

**Endpoint:** `GET /books/search`

**Query Parameters:**
```
query: string
page: number (default: 1)
limit: number (default: 10)
category: string (optional)
```

**Response:** `200 OK`
```json
{
  "books": [
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "coverUrl": "string",
      "category": "string",
      "description": "string"
    }
  ],
  "pagination": {
    "currentPage": number,
    "totalPages": number,
    "totalItems": number
  }
}
```

---

### User Profile

#### 1. Get User Profile
Get the current user's profile information.

**Endpoint:** `GET /users/profile`

**Headers Required:** `Authorization`

**Response:** `200 OK`
```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "avatarUrl": "string",
  "createdAt": "string",
  "lastLogin": "string"
}
```

---

#### 2. Update User Profile
Update user profile information.

**Endpoint:** `PUT /users/profile`

**Headers Required:** `Authorization`

**Request Body:**
```json
{
  "username": "string",
  "password": "string",  // Optional
  "avatarUrl": "string"  // Optional
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Profile updated successfully"
}
```

## Error Response Format
All error responses follow this format:
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

## Common Error Codes
- `AUTH001`: Invalid credentials
- `AUTH002`: Token expired
- `AUTH003`: Invalid token
- `VAL001`: Invalid input data
- `BOOK001`: Book not found
- `BOOK002`: Invalid category

## Security Considerations
1. All endpoints use HTTPS
2. Passwords must be at least 8 characters long
3. JWT tokens expire after 24 hours
4. Passwords are hashed using bcrypt
5. Rate limiting is implemented on authentication endpoints

## Development Environment
- Base URL: `https://dev-api.books-site.com/v1`
- Rate limits are relaxed in development

## Production Environment
- Base URL: `https://api.books-site.com/v1`
- Strict rate limiting enforced
- SSL/TLS required for all endpoints

## Testing
Test account available for development:
- Email: `test@gmail.com`
- Password: `test1234`

## Changelog
### v1.0.0 (2024-01-20)
- Initial API release
- Basic authentication endpoints
- Book browsing and search functionality
- User profile management
