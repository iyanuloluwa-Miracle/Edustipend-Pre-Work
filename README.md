# Sample Node.js API Service

This is a sample Node.js service that provides two API endpoints for retrieving comments and posts from the JSONPlaceholder API. It allows users to specify the number of items to be returned in the response.

## Getting Started

These instructions will guide you on how to run the service locally.

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the project repository:

   git clone <repository-url>

2 .Navigate to the project directory:

cd project-directory

3.Install dependencies:
npm install

### Usage

Start the service:
npm start

(http://localhost:3001/).

### API Endpoints

GET /api/comments
(http://localhost:3001/api/comments).
   
GET /api/posts
(http://localhost:3001/api/posts).


   
Retrieves comments from the JSONPlaceholder API.

### Parameters

limit (optional): Limits the number of comments returned in the response.
Example usage:
http://localhost:3001/api/comments?limit=5/
GET /api/posts
Retrieves posts from the JSONPlaceholder API.

### Parameters

limit (optional): Limits the number of posts returned in the response.
Example usage
http://localhost:3001/api/posts?limit=5/

Stop the service by pressing Ctrl + C in the terminal.
   

Extra Bonus: Hosted Link LiveLink https://edustipend-pre-work.onrender.com
