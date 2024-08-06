import DevicesIcon from "@mui/icons-material/Devices";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(50);

  return (
    <Box
      component={"header"}
      sx={{
        width: "100%",
        height: headerHeight,
        display: "flex",
        gap: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #6d28d9, #4a90e2)",
        transition: "height 0.3s ease",
        // paddingY: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setHeaderHeight(100)}
      onMouseLeave={() => setHeaderHeight(50)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: 2,
        }}
      >
        <IconButton
          sx={{
            animation: "float 3s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-5px)" },
              "100%": { transform: "translateY(0)" },
            },
          }}
        >
          <DevicesIcon sx={{ fontSize: 40, color: "white" }} />
        </IconButton>
        <Typography
          sx={{
            letterSpacing: 2,
            fontSize: { xs: 24, md: 30 },
            marginX: 1,
            fontWeight: 700,
            color: "white",
          }}
        >
          Milaso
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginRight: 2,
        }}
      >
        {["Support", "Our Team", "Career"].map((text) => (
          <Typography
            key={text}
            sx={{
              letterSpacing: 2,
              fontSize: { xs: 16, md: 20 },
              marginX: 1,
              fontWeight: 500,
              color: "white",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#e0e0e0",
              },
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
