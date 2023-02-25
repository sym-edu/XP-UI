import { Box, colors, ThemeProvider } from "@mui/material";
import { theme } from "../theme";

const bgImage = require("../assets/bg2.jpg");

const MainLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor:colors.orange[500],
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
