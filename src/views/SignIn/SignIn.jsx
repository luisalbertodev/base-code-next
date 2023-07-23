import React from "react";
import firebaseApp from "@/firebase/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignIn = () => {
	const [form, setForm] = React.useState({
		email: "",
		password: "",
	});

	const auth = getAuth(firebaseApp);

	const signInWithFirebase = async (email, password) => {
		let result = null,
			error = null;
		try {
			result = await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			error = e;
		}

		return { result, error };
	};

	const handleOnChangeInput = (type, value) => {
		setForm((s) => ({
			...s,
			[type]: value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		signInWithFirebase(form.email, form.password)
			.then((res) => {
				console.log({ res });
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	return (
		<div>
			<h1>SignIn</h1>
			<form onSubmit={handleOnSubmit}>
				<TextField
					fullWidth
					type="email"
					name="email"
					label="Correo"
					value={form.email}
					onChange={(e) =>
						handleOnChangeInput("email", e.target.value)
					}
				/>
				<TextField
					fullWidth
					type="password"
					name="password"
					label="Contraseña"
					value={form.password}
					onChange={(e) =>
						handleOnChangeInput("password", e.target.value)
					}
				/>
				<Button variant="contained" type="submit">
					Iniciar sesión
				</Button>
			</form>
		</div>
	);
};

export default SignIn;
