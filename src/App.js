import React from 'react';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import Qrscanner from './components/Qrscanner';
import Maps from './components/Maps';
import SideBar from './screens/sidebar';
import Home from './screens/home/';
import ProductItem from './components/ProductItem';
import ProductItem2 from './components/ProductItem2';
import ProductItem3 from './components/ProductItem3';
import ProductItem4 from './components/ProductItem4';


const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: 'Home',
		contentComponent: props => <SideBar {...props} />
	}
);

const AppNavigator = StackNavigator(
	{
		Drawer: { screen: Drawer },
		Qrscanner: { screen: Qrscanner },
		ProductItem: { screen: ProductItem },
		ProductItem2: { screen: ProductItem2 },
		ProductItem3: { screen: ProductItem3 },
		ProductItem4: { screen: ProductItem4 },
	},
	{
		initialRouteName: 'Drawer',
		headerMode: 'none'
	}
);

class App extends React.Component {
	render() {
		return (
			<Provider store={store} >
				<PersistGate loading={null} persistor={persistor}>
					<Root>
						<AppNavigator />
					</Root>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
