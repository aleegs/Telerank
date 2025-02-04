import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationHeader from 'components/navigation/NavigationHeader';
import MainScreen from 'screens/MainScreen';
import DetailsScreen from 'screens/DetailsScreen';
import ContactScreen from 'screens/ContactScreen';
import AddMediaScreen from 'screens/AddMediaScreen';
import PromoteScreen from 'screens/PromoteScreen';
import SearchResultScreen from 'screens/SearchResultScreen';
import WebViewScreen from 'screens/WebViewScreen';

const Stack = createStackNavigator();

const DEFAULT_ROUTE = 'Home';

const ROUTES = [
	{
		name: 'Home',
		component: MainScreen,
		localeKey: 'routes.home',
		extendHeaderGradient: false,
	},
	{
		name: 'Details',
		component: DetailsScreen,
		localeKey: 'routes.details',
		extendHeaderGradient: true,
	},
	{
		name: 'Contact',
		component: ContactScreen,
		extendHeaderGradient: false,
		localeKey: 'routes.contact',
	},
	{
		name: 'AddMedia',
		component: AddMediaScreen,
		extendHeaderGradient: false,
		localeKey: 'routes.addMedia',
	},
	{
		name: 'Promote',
		component: PromoteScreen,
		extendHeaderGradient: false,
		localeKey: 'routes.promote',
	},
	{
		name: 'SearchResult',
		component: SearchResultScreen,
		extendHeaderGradient: false,
		localeKey: 'routes.searchResult',
	},
	{
		name: 'WebViewScreen',
		component: WebViewScreen,
		extendHeaderGradient: false,
		localeKey: 'routes.webView',
	},
];

export function getRouteInfo(route) {
	return ROUTES.find((q) => q.name === route.name);
}

export function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={DEFAULT_ROUTE} screenOptions={{ header: (props) => <NavigationHeader {...props} routeInfo={getRouteInfo} /> }}>
				{ROUTES.map((q) => (
					<Stack.Screen key={q.name} name={q.name} component={q.component} screenOptions={{ title: q.title }} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
