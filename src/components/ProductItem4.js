import React, { Component } from 'react';
import { ImageBackground, View, StatusBar, Alert, Image } from 'react-native';
import { Container, Button, Text, Header, Left, Icon, Title, Body, Right, Input,
	ScrollableTab, Tabs, Tab,
	Item,
	Content,
	Toast,
	Footer,
	FooterTab,
	Card,
	CardItem,
	Thumbnail,
	H1,
	H2,
	H3,
	H4,
	H5,
	Form,
} from 'native-base';

import flr1 from './../images/Wooden-Spoon-All-Purpose-Flour-155x200.png';
import flr2 from './../images/Wooden-Spoon-Cake-Flour-155x200.png';
import flr3 from './../images/Wooden-Spoon-Siopao-Flour-155x200.png';
import flr4 from './../images/Wooden-Spoon-Whole-Wheat-Flour-155x200.png';

class ProductItem4 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>WOODEN SPOON WHOLE WHEAT FLOUR</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<H1 style={styles.mb10}>WOODEN SPOON WHOLE WHEAT FLOUR</H1>
					<Image style={styles.img} source={flr4} />

					<Text>{'\u2022'}Premium quality all purpose flour.</Text>
					<Text>{'\u2022'}Specially blended for moderate protein content.</Text>
					<Text>{'\u2022'}Suitable for all types of home baking.</Text>
					<Text>{'\u2022'}For batter-type cakes, steamed breads and various types of soft breads.</Text>
					<Text>{'\u2022'}Highly recommended for baked products where whiteness is required.</Text>

					<Item regular>
						<Input placeholder="1"/>
					</Item>
					<Button primary>
						<Text>ADD TO CART</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}


const styles = {
	mb10: {
		marginBottom: 10,
	},
	img: {
		resizeMode: 'contain', //contain
		width: null,
		height: 200,
		flex: 1,
		marginBottom: 10
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

export default ProductItem4;
