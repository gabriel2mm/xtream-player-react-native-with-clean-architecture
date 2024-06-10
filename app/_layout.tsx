import { ServiceFactory } from '@core/infrastructure/factory/account-service.factory';
import ReactQueryFactory from '@core/infrastructure/factory/react-query.factory';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Button } from 'react-native';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TesteComponent } from './teste';

const queryClient = ReactQueryFactory.getInstance();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	

	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<TesteComponent />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}
