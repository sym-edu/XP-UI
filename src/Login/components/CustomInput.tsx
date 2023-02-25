import { VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { colors } from "../theme";

const CustomInput: React.FC<{
  isIconActive: boolean;
  label: string;
  placeholder: string;
}> = ({ isIconActive, label, placeholder }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="flex-start"
      mb={2}
    >
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Typography color="white" variant='h5' pb={1}>
          {label}
        </Typography>
        <Paper
          sx={{
            backgroundColor: 'colors.orange[50]',
            width: "100%"
          }}
        >
          <InputBase
            placeholder={placeholder}
            fullWidth
            sx={{
              backgroundColor: 'colors.orange[50]',
              p: 1,
              borderRadius: "5px",
            }}
            endAdornment={
              isIconActive && (
                <InputAdornment position="end" sx={{ pr: 1 }}>
                  <IconButton edge="end">
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default CustomInput;
