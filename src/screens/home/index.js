import React, { Component } from 'react';
import { ImageBackground, View, StatusBar, Alert, Image } from 'react-native';
import { Container, Button, H3, Text, Header, Left, Icon, Title, Body, Right, Input,
ScrollableTab, Tabs, Tab,
Item,
Content,
Toast,
Footer,
FooterTab,
Card,
CardItem,
Thumbnail,
} from 'native-base';
import TabOne from './../tab/tabOne';
import TabTwo from './../tab/tabTwo';
import TabThree from './../tab/tabThree';
import TabFour from './../tab/tabFour';
import TabFive from './../tab/tabFive';
import QRScanner from './../../components/Qrscanner';

import flr1 from './../../images/Wooden-Spoon-All-Purpose-Flour-155x200.png';
import flr2 from './../../images/Wooden-Spoon-Cake-Flour-155x200.png';
import flr3 from './../../images/Wooden-Spoon-Siopao-Flour-155x200.png';
import flr4 from './../../images/Wooden-Spoon-Whole-Wheat-Flour-155x200.png';

const launchscreenBg = require('../../../assets/launchscreen-bg.png');
const launchscreenLogo = require('../../../assets/logo-kitchen-sink.png');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab1: false,
			tab2: false,
			tab3: true,
			tab4: false
		};
		this.toggleTab1 = this.toggleTab1.bind(this);
		this.toggleTab2 = this.toggleTab2.bind(this);
		this.toggleTab3 = this.toggleTab3.bind(this);
		this.toggleTab4 = this.toggleTab4.bind(this);
	}
	toggleTab1() {
		this.setState({ tab1: true, tab2: false, tab3: false, tab4: false });
	}
	toggleTab2() {
		this.setState({ tab1: false, tab2: true, tab3: false, tab4: false });
	}
	toggleTab3() {
		this.setState({ tab1: false, tab2: false, tab3: true, tab4: false });
	}
	toggleTab4() {
		this.setState({ tab1: false, tab2: false, tab3: false, tab4: true });
	}

	onClickQRScanner() {
		this.props.navigation.navigate('Qrscanner');
	}

	onClickSearch() {
		Toast.show({
			text: "Wrong password!",
			buttonText: "Okay",
			type: "success"
		});
	}

	render() {
		const { tab1, tab2, tab3, tab4 } = this.state;
		return (
			<Container>
				<Header noLeft>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Home</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Item regular>
						<Icon active name="qrcode-scan" onPress={this.onClickQRScanner.bind(this)} type="MaterialCommunityIcons" />
						<Input placeholder="Enter or scan tracking code" />
						<Icon active name="search" onPress={this.onClickSearch.bind(this)} />
					</Item>

					<Card style={styles.mb}>
						<CardItem
							button
							onPress={() => this.props.navigation.navigate('ProductItem')}>
							<Image style={styles.img} source={flr1} />
						</CardItem>

						<CardItem cardBody style={{ paddingVertical: 0 }}>
							<Body>
								<Button transparent>
									<Text>WOODEN SPOON ALL-PURPOSE-FLOUR</Text>
								</Button>
							</Body>
						</CardItem>
					</Card>

					<Card style={styles.mb}>
						<CardItem
							button
							onPress={() => this.props.navigation.navigate('ProductItem2')}>
							<Image style={styles.img} source={flr2} />
						</CardItem>

						<CardItem cardBody style={{ paddingVertical: 0 }}>
							<Body>
								<Button transparent>
									<Text>WOODEN SPOON CAKE FLOUR</Text>
								</Button>
							</Body>
						</CardItem>
					</Card>

					<Card style={styles.mb}>
						<CardItem
							button
							onPress={() => this.props.navigation.navigate('ProductItem3')}>
							<Image style={styles.img} source={flr3} />
						</CardItem>

						<CardItem cardBody style={{ paddingVertical: 0 }}>
							<Body>
								<Button transparent>
									<Text>WOODEN SPOON SIOPAO FLOUR</Text>
								</Button>
							</Body>
						</CardItem>
					</Card>

					<Card style={styles.mb}>
						<CardItem
							button
							onPress={() => this.props.navigation.navigate('ProductItem4')}>
							<Image style={styles.img} source={flr4} />
						</CardItem>

						<CardItem cardBody style={{ paddingVertical: 0 }}>
							<Body>
								<Button transparent>
									<Text>WOODEN SPOON WHOLE WHEAT FLOUR</Text>
								</Button>
							</Body>
						</CardItem>
					</Card>
				</Content>

				<Footer>
					<FooterTab>
						<Button active={tab1} onPress={this.toggleTab1}>
							<Icon type="MaterialCommunityIcons" active={tab1} name="home" />
							<Text small>Home</Text>
						</Button>
						<Button active={tab2} onPress={this.toggleTab2}>
							<Icon type="MaterialCommunityIcons" active={tab2} name="cart" />
							<Text small>Cart</Text>
						</Button>
						<Button active={tab3} onPress={this.toggleTab3}>
							<Icon type="MaterialIcons" active={tab3} name="notifications" />
							<Text small>Notification</Text>
						</Button>
						<Button active={tab4} onPress={this.toggleTab4}>
							<Icon type="MaterialCommunityIcons" active={tab4} name="account" />
							<Text small>Account</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const styles = {
	img: {
		resizeMode: 'contain', //contain
		width: null,
		height: 150,
		flex: 1
	},
	container: {
		backgroundColor: '#FFF'
	},
	text: {
		alignSelf: 'center',
		marginBottom: 7
	},
	mb: {
		marginBottom: 5
	}
};

export default Home;
