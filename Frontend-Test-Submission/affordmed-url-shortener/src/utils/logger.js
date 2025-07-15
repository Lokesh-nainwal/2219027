export async function log(stack, level, pkg, message, token) {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // ✅ fixed with backticks
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });
    const data = await response.json();
    console.log("Log sent:", data);
  } catch (err) {
    console.error("Failed to log:", err);
  }
}
