import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { useMemo } from "react";
import FlexBox from "./src/components/FlexBox";
import Forums from "./src/components/Student_forums";
import WelcomePage from "./src/components/WelcomePage";
import Student_event from "./src/components/Student_event";
import PageEvents from "./src/components/Student_event";
import Profile1 from "./src/components/Profile1";
import Profile2 from "./src/components/Profile2";
import WelcomePageMain from "./src/components/WelcomePage";
import LandingPage from "./src/components/LandingPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import Ionicons from "react-native-vector-icons/Feather";
export const AppContext = React.createContext({});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
	const [isSignedIn, setIsSignedIn] = React.useState(false);
	const appContextValue = useMemo(
		() => ({
			isSignedIn,
			setIsSignedIn,
		}),
		[isSignedIn]
	);

	return (
		<View style={styles.container}>
			<NavigationContainer>
				<AppContext.Provider value={appContextValue}>
					{!isSignedIn ? (
						<Stack.Navigator>
							<Stack.Screen name="Landing Page" component={LandingPage} />
							<Stack.Screen name="Login" component={Login} />
							<Stack.Screen name="Sign Up" component={SignUp} />
						</Stack.Navigator>
					) : (
						// whatever screens if user is logged in
						<Tab.Navigator>
							<Tab.Screen
								name="Home"
								component={WelcomePageMain}
								options={{
									tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
								}}
							/>
							<Tab.Screen
								name="FlexBox"
								component={FlexBox}
								options={{
									tabBarIcon: ({ color, size }) => <Ionicons name="box" color={color} size={size} />,
								}}
							/>
							<Tab.Screen name="Forums" component={Forums} 
								options={{
									tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
								}}/>
							<Tab.Screen name="Events" component={PageEvents} 
								options={{
									tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
								}}/>
							<Tab.Screen name="Profile" component={Profile1} 
								options={{
									tabBarIcon: ({ color, size }) => <Ionicons name="user" color={color} size={size} />,
								}}/>
							{/* Student_event */}
							<Tab.Screen name="Profile2" component={Profile2}
								options={{
									tabBarIcon: ({ color, size }) => <Ionicons name="users" color={color} size={size} />,
								}} />
						</Tab.Navigator>
					)}
					{/* <Tab.Navigator>
						<Tab.Screen name="Home" component={HomeScreen} />
						<Tab.Screen name="Settings" component={SettingsScreen} />
					</Tab.Navigator> */}
				</AppContext.Provider>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
