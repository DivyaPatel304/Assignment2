import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";

const WelcomePageMain = ({ navigation }) => {
	return (
		<View style={styles.wrapper}>
			<View style={[styles.boxstyle, styles.box1]}>
				<View style={styles.header}>
					<Image source={require("./../../georgain.png")} />
				</View>
			</View>

			<View style={[styles.boxstyle, styles.box2]}>
				<View style={styles.header}>
					<Image
						source={{
							uri: "https://educationconcern.com/wp-content/uploads/2021/07/Georgian-College-Canada.jpg",
							height: 300,
						}}
						style={{ width: "100%" }}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonGroup: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 2,
		justifyContent: "space-evenly",
		gap: 12,
	},
	wrapper: {
		flex: 1,
		backgroundColor: "white",
	},
	boxstyle: {
		width: "100%",
		height: 50,
	},
	box1: {
		flex: 1,
		alignItems: "center",
	},
	box2: {
		flex: 3,
		alignItems: "center",
	},
	box3: {
		flex: 1,
	},
	header: {
		flex: 1,
		margin: 10,
		backgroundColor: "white",
	},
	footer: {
		marginBottom: 100,
		margin: 10,
		flexDirection: "row",
		backgroundColor: "white",
		justifyContent: "space-evenly",
	},
	boxfooter1: {
		backgroundColor: "blue",
		width: 100,
		height: 100,
	},
	boxfooter2: {
		backgroundColor: "green",
		width: 100,
		height: 100,
	},
});

export default WelcomePageMain;
