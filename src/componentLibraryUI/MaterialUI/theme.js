import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: "Poppins, Roboto",
		allVariants: {
			fontFamily: "Poppins, Roboto",
		},
	},
	components: {
		MuiTextField: {
			defaultProps: {
				variant: "outlined",
			},
		},
		MuiFormControl: {
			defaultProps: {
				variant: "outlined",
			},
		},
		MuiButton: {
			defaultProps: {
				size: "large",
				variant: "contained",
			},
		},
		MuiLoadingButton: {
			defaultProps: {
				size: "large",
				variant: "contained",
			},
		},
	},
});

export default theme;
