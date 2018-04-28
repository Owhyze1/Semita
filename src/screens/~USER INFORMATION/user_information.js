import React, { Component } from "react";

import {
    Container,
    Header, Left, Body, Right,
    Content,
    Button,
    Icon,
    Card, CardItem,
    Text, Title,
    Form, Item, Input, Label

} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import { ImageBackground, View, TextInput } from 'react-native';
import styles from "./styles";

const screenBackground = require("../../../assets/Semita-background-tracks.png");



class User_Information extends Component {
    render() {
        return (
            <Container style={styles.container}>


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
                            <Title style={styles.title}>User Information</Title>
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
                        <Form>
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Phone Number</Label>
                                <Input secureTextEntry />
                            </Item>
                        </Form>
                        <Button block style={{ margin: 15, marginTop: 50, backgroundColor: 'rgba(1,1,1,0.6)' }}>
                            <Text>Save</Text>
                        </Button>
                    </Content>


                </ImageBackground>
            </Container>
        );
    }
}

export default User_Information;