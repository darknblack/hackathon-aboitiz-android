const React = require('react-native');
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
	drawerCover: {
		alignSelf: 'stretch',
		height: deviceHeight / 3.5,
		width: null,
		position: 'relative',
		marginBottom: 10,
		backgroundColor: '#42AAE3'
	},
	drawerImage: {
		position: 'absolute',
		// left: Platform.OS === 'android' ? deviceWidth / 10 : deviceWidth / 9,
		top: 70,
		left: 40,
		// width: 210,
		height: 40,
		resizeMode: 'contain'
	},
	text: {
		fontWeight: Platform.OS === 'ios' ? '500' : '400',
		fontSize: 16,
		marginLeft: 20
	},
	badgeText: {
		fontSize: Platform.OS === 'ios' ? 13 : 11,
		fontWeight: '400',
		textAlign: 'center',
		marginTop: Platform.OS === 'android' ? -3 : undefined
	}
};
