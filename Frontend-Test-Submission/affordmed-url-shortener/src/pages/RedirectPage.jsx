import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { log } from "../utils/logger";

const RedirectPage = () => {
  const { shortcode } = useParams();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsb2tlc2huYWlud2FsMjk5QGdtYWlsLmNvbSIsImV4cCI6MTc1MjU1OTc1NiwiaWF0IjoxNzUyNTU4ODU2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODkxMWVhYjYtNTVmYi00MDAyLWIxMzMtZjFlZWQ2NDQzODFlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibG9rZXNoIG5haW53YWwiLCJzdWIiOiJhMTgxOTAzZS1kNWZkLTQ5Y2YtOGZkYS0zNzM2ODk3YmZhZjQifSwiZW1haWwiOiJsb2tlc2huYWlud2FsMjk5QGdtYWlsLmNvbSIsIm5hbWUiOiJsb2tlc2ggbmFpbndhbCIsInJvbGxObyI6IjIyMTkwMjciLCJhY2Nlc3NDb2RlIjoiUUFoRFVyIiwiY2xpZW50SUQiOiJhMTgxOTAzZS1kNWZkLTQ5Y2YtOGZkYS0zNzM2ODk3YmZhZjQiLCJjbGllbnRTZWNyZXQiOiJldE1Fa0pzaFVSd0ZoSFNGIn0.S8GTZ6ze8Q_5PZ3kOPAhw5amt7Zx1SyC3zjgYTQHi9E";

  useEffect(() => {
    const longURL = localStorage.getItem(shortcode);

    if (longURL) {
      log("frontend", "info", "page", `Redirecting to ${longURL}`, token);
      window.location.href = longURL;
    } else {
      log(
        "frontend",
        "error",
        "page",
        `Shortcode not found: ${shortcode}`,
        token
      );
      alert("Shortcode not found!");
    }
  }, [shortcode, token]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
