const axios = require('axios');

async function logEvent(stack, level, pkg, message, token) {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log("Log sent:", response.data.message);
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}

module.exports = logEvent;
