import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import { commonStyles } from '../config/Styles';
import HomeTab from './tabscreens/HomeTab';
import APIErrorSnackbar from '../components/APIErrorSnackbar';

const styles = StyleSheet.create({
	tabs: { backgroundColor: 'white', elevation: 5, marginTop: 5 },
});

export default function MainScreen() {
	return (
		<View style={commonStyles.flex}>
			<Tabs iconPosition='leading' style={styles.tabs} mode='scrollable' showLeadingSpace>
				<TabScreen label='Inicio' icon='home'>
					<HomeTab style={styles.view} />
				</TabScreen>
				<TabScreen label='Top 100' icon='crown'>
					<View />
				</TabScreen>
				<TabScreen label='Canales' icon='bullhorn'>
					<View />
				</TabScreen>
				<TabScreen label='Grupos' icon='forum'>
					<View />
				</TabScreen>
				<TabScreen label='Bots' icon='robot'>
					<View />
				</TabScreen>
				<TabScreen label='Stickers' icon='sticker'>
					<View />
				</TabScreen>
			</Tabs>

			<APIErrorSnackbar />
		</View>
	);
}
