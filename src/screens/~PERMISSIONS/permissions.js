import React, { Component } from "react";

import {
    Container,
    Header, Left, Body, Right,
    Content,
    Button,
    Icon,
    Text, Title,
    Picker, ListItem
} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import { ImageBackground, View, TextInput } from 'react-native';
import styles from "./styles";

const screenBackground = require("../../../assets/Semita-background-tracks.png");

const Item = Picker.Item;



class GPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: "key1",
            results: {
                items: []
            }
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (

            <ListItem icon style={styles.listitem} >
                <Left>
                    <Button style={{ backgroundColor: 'rgba(1,1,1,0.6)' }}>
                        <Icon name="navigate" />
                    </Button>
                </Left>
                <Body>
                    <Text>Access GPS</Text>
                </Body>
                <Right>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Item label="DENY" value="key0" />
                        <Item label="ALLOW" value="key1" />
                    </Picker>
                </Right>
            </ListItem>


        );
    }
}




class PhoneContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: "key1",
            results: {
                items: []
            }
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (

            <ListItem icon style={styles.listitem} >
                <Left>
                    <Button style={{ backgroundColor: 'rgba(1,1,1,0.6)' }}>
                        <Icon name="person" />
                    </Button>
                </Left>
                <Body>
                    <Text>Access Phone Contacts</Text>
                </Body>
                <Right>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Item label="DENY" value="key0" />
                        <Item label="ALLOW" value="key1" />
                    </Picker>
                </Right>
            </ListItem>


        );
    }
}





class TextMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: "key1",
            results: {
                items: []
            }
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (

            <ListItem icon style={styles.listitem} >
                <Left>
                    <Button style={{ backgroundColor: 'rgba(1,1,1,0.6)' }}>
                        <Icon name="chatboxes" />
                    </Button>
                </Left>
                <Body>
                    <Text>Access Text Messaging</Text>
                </Body>
                <Right>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Item label="DENY" value="key0" />
                        <Item label="ALLOW" value="key1" />
                    </Picker>
                </Right>
            </ListItem>


        );
    }
}






class Permissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: "key1",
            results: {
                items: []
            }
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (
            <Container>


                <Grid style={styles.header}>
                    <Col size={1}>

                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{ color: 'white' }} active name="home" />
                        </Button>
                    </Col>
                    <Col size={4}>
                        <View>
                            <Title style={styles.title}>Permissions</Title>
                        </View>
                    </Col>
                    <Col size={1}>

                        <Button
                            transparent
                            style={styles.settings_button}
                            onPress={() => this.props.navigation.navigate("Settings")}
                        >
                            <Icon style={{ color: 'white' }} active name="settings" />
                        </Button>
                    </Col>
                </Grid>


                <ImageBackground
                    source={screenBackground}
                    style={styles.image}
                >

                    <Content>
                        <GPS/>
                        <PhoneContacts />
                        <TextMessages/>
                    </Content>
                    
                </ImageBackground>
            </Container>
        );
    }
}

export default Permissions;