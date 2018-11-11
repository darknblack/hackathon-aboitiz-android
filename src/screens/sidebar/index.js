import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge
} from 'native-base';
import styles from './style';

const drawerCover = require('../../../assets/drawer-cover.png');
const drawerImage = require('../../images/logo.png');
const datas = [
	{
		name: 'Home',
		route: 'Anatomy',
		icon: 'phone-portrait',
		bg: '#C5F442'
	},
	{
		name: 'Account',
		route: 'Anatomy',
		icon: 'phone-portrait',
		bg: '#C5F442'
	},
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4
		};
	}

	render() {
		return (
			<Container>
				<Content
					bounces={false}
					style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
				>
					<View style={styles.drawerCover} />
					<Image square style={styles.drawerImage} source={drawerImage} />

					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem
								button
								noBorder
								onPress={() => this.props.navigation.navigate(data.route)}
							>
								<Left>
									<Icon
										active
										name={data.icon}
										style={{ color: '#777', fontSize: 26, width: 30 }}
									/>
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
																		<Right style={{ flex: 1 }}>
																			<Badge
																				style={{
																					borderRadius: 3,
																					height: 25,
																					width: 72,
																					backgroundColor: data.bg
																				}}
																			>
																				<Text
																					style={styles.badgeText}
																				>{`${data.types} Types`}</Text>
																			</Badge>
																		</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
