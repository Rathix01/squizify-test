import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  brand: {
    main: "rgb(9, 211, 172)",
    radius: "8px",
  },
  fontSizes: {
    medium: "0.8rem",
  }
});

export default theme;