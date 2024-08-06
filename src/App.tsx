import { keyframes } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Header />
        <Box
          component={"main"}
          sx={{
            // backgroundColor: "yellow",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Box sx={{ display: "flex", width: "50%", position: "relative" }}>
              <img
                src="https://i.imgur.com/4JxbsTP.jpeg"
                alt="Man irritated working on computer"
                width={"100%"}
                style={{ filter: "brightness(80%)" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "35%",
                  transform: "translate(-50%, -50%)",
                  fontSize: { xs: 30, md: 60 },
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  WebkitBackgroundClip: "text",
                  opacity: 0,
                  animation: `${slideInLeft} 1s ease-in-out forwards`,
                }}
              >
                Having
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "35%",
                  left: "35%",
                  transform: "translate(-50%, -50%)",
                  fontSize: { xs: 30, md: 60 },
                  color: "white",
                  fontWeight: "bold",
                  opacity: 0,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(135deg, #6d28d9, #4a90e2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: `${slideInLeft} 1s ease-in-out 0.5s forwards`,
                }}
              >
                IT-problems?
              </Typography>
            </Box>
            <Box sx={{ display: "flex", width: "50%", position: "relative" }}>
              <img
                src="https://i.imgur.com/sBl4rvv.jpeg"
                alt="Woman working on computer"
                width={"100%"}
                style={{ filter: "brightness(80%)" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "35%",
                  left: "45%",
                  opacity: 0,
                  transform: "translate(-50%, -50%)",
                  fontSize: { xs: 30, md: 60 },
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(135deg, #4a90e2, #6d28d9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: `${slideInRight} 1s ease-in-out 0.5s forwards`,
                }}
              >
                Our team
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  opacity: 0,
                  left: "30%",
                  transform: "translate(-50%, -50%)",
                  fontSize: { xs: 30, md: 60 },
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  WebkitBackgroundClip: "text",
                  animation: `${slideInRight} 1s ease-in-out 1s forwards`,
                }}
              >
                will help you
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              backgroundColor: "purple",
            }}
          ></Box>
        </Box>
        <Box
          component={"footer"}
          sx={{
            backgroundColor: "black",
            display: "flex",
            width: "100%",
            flex: 1,
          }}
        >
          <Typography>MAIN</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
