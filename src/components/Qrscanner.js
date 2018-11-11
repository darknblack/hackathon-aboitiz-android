import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableOpacity,
	Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
	onSuccess(e) {
		Linking
			.openURL(e.data)
			.catch(err => console.error('An error occured', err));
	}

	render() {
		return (
			<QRCodeScanner
				containerStyle={{marginTop: 10}}
				ref={(node) => { this.scanner = node; }}
				onRead={this.onSuccess.bind(this)}
				reactivate={true}
				reactivateTimeout={2}
				showMarker={true}
				topContent={
					<Text style={styles.centerText}>Scan QR Code</Text>
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	centerText: {
		flex: 1,
		fontSize: 18,
		paddingVertical: 20,
		color: '#777',
	},
	textBold: {
		fontWeight: '500',
		color: '#000',
	},
	buttonText: {
		fontSize: 21,
		backgroundColor: '#6699CC',
		color: '#fff',
		padding: 10,

	},
	buttonTouchable: {
		padding: 16,
		marginTop: 30,
	},
});
