import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: 400,
		width: 400,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});



export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
		};

		this.getInitialState = this.getInitialState.bind(this);
		this.onRegionChange = this.onRegionChange.bind(this);
	}

	getInitialState() {
		return {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
		};
	}

	onRegionChange(region) {
		// this.setState({ region });
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					region={this.state.region}
					onRegionChange={this.onRegionChange}
					style={styles.map}
					provider={PROVIDER_GOOGLE}
				/>
			</View>
		);
	}
}
