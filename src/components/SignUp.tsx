import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AppContext } from "../../App";

const SignUp = ({ navigation }) => {
	const { setIsSignedIn } = React.useContext(AppContext);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [repassword, setRePassword] = useState("");
	const signUpClicked = () => {
		if (username == "" || password == "" || repassword == "") {
			Alert.alert("Invalid inputs", "Username and password are required!");
			return;
		}
		if (password != repassword) {
			Alert.alert("Invalid password", "Password and re-type password do not match!");
			return;
		}
		setIsSignedIn(true);
		setTimeout(() => {
			navigation.navigate("Home");
		}, 1000);
	};
	return (
		<View style={styles.wrapper}>
			<Image
				source={{
					uri: "https://educationconcern.com/wp-content/uploads/2021/07/Georgian-College-Canada.jpg",
					height: 300,
				}}
				style={{ width: "100%" }}
			/>
			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					placeholder="Username"
					numberOfLines={1}
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					numberOfLines={1}
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Re-type Password"
					secureTextEntry={true}
					numberOfLines={1}
					value={repassword}
					onChangeText={(text) => setRePassword(text)}
				/>
				<Button title="Sign Up" onPress={signUpClicked} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "white",
	},
	inputWrapper: { padding: 20, marginTop: 20 },
	input: {
		borderBottomColor: "#999999",
		borderBottomWidth: 1,
		height: 20,
		marginTop: 10,
		marginBottom: 10,
		width: "100%",
		fontSize: 20,
	},
});

export default SignUp;
