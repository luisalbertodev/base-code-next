import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import theme from "@/componentLibraryUI/MaterialUI/theme";
import createEmotionCache from "@/componentLibraryUI/MaterialUI/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const Layer = ({ children }) => {
	return (
		<CacheProvider value={clientSideEmotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CacheProvider>
	);
};

export default Layer;
