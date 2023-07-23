import * as React from "react";
import Head from "next/head";
import LayerUIComponentLibrary from "@/componentLibraryUI/MaterialUI/Layer";

export default function App({ Component, pageProps }) {
	return (
		<LayerUIComponentLibrary>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</LayerUIComponentLibrary>
	);
}
