import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<div className={styles.content}>
			Contact
			<TextField fullWidth name="email" label={"Correo"} />
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
				/>
				<TextField id="filled-basic" label="Filled" variant="filled" />
				<TextField
					id="standard-basic"
					label="Standard"
					variant="standard"
				/>
			</Box>
		</div>
	);
};

export default Contact;
