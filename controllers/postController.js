const axios = require('axios');

// Handle GET /api/posts endpoint
exports.getPosts = async (req, res) => {
  try {
    const limit = req.query.limit || 10; // default limit is 10 if not provided

    // Make a GET request to the JSONPlaceholder API
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    // Return the response data as the API response
    res.json(response.data);
  } catch (error) {
    // Handle any errors that occurred during the request
    res.status(500).json({ error: 'An error occurred' });
  }
};
