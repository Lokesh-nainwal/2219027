import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { log } from "../utils/logger";

const Home = () => {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [shortLink, setShortLink] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsb2tlc2huYWlud2FsMjk5QGdtYWlsLmNvbSIsImV4cCI6MTc1MjU1OTc1NiwiaWF0IjoxNzUyNTU4ODU2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODkxMWVhYjYtNTVmYi00MDAyLWIxMzMtZjFlZWQ2NDQzODFlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibG9rZXNoIG5haW53YWwiLCJzdWIiOiJhMTgxOTAzZS1kNWZkLTQ5Y2YtOGZkYS0zNzM2ODk3YmZhZjQifSwiZW1haWwiOiJsb2tlc2huYWlud2FsMjk5QGdtYWlsLmNvbSIsIm5hbWUiOiJsb2tlc2ggbmFpbndhbCIsInJvbGxObyI6IjIyMTkwMjciLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiJhMTgxOTAzZS1kNWZkLTQ5Y2YtOGZkYS0zNzM2ODk3YmZhZjQiLCJjbGllbnRTZWNyZXQiOiJldE1Fa0pzaFVSd0ZoSFNGIn0.S8GTZ6ze8Q_5PZ3kOPAhw5amt7Zx1SyC3zjgYTQHi9E";

  const handleSubmit = async () => {
    if (!url) {
      alert("Please enter a valid URL");
      await log("frontend", "error", "component", "Empty URL input", token);
      return;
    }

    const finalCode = shortcode || Math.random().toString(36).substring(2, 8);
    const shortURL = `http://localhost:3000/${finalCode}`;

    // ✅ Save the mapping
    localStorage.setItem(finalCode, url);

    setShortLink(shortURL);

    await log(
      "frontend",
      "info",
      "component",
      `Shortened ${url} to ${shortURL}`,
      token
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shorten URL
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          label="Validity (minutes)"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <TextField
          label="Custom Shortcode (optional)"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Generate Short URL
        </Button>
      </Box>
      {shortLink && (
        <Typography mt={2}>
          Your short link: <a href={shortLink}>{shortLink}</a>
        </Typography>
      )}
    </Container>
  );
};

export default Home;
