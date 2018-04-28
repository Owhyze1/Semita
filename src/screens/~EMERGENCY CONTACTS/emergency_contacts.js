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



class Emergency_Contacts extends Component {
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
                            <Title style={styles.title}>Emergency Contacts</Title>
                        </View>
                    </Col>
                    <Col size={1}>

                        <Button
                            transparent
                            style={styles.header_button}
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

                        <Button block style={ styles.form_button} >
                            <Text>Choose from Contact List</Text>
                        </Button>

                        <Form>
                            <Item fixedLabel>
                                <Label>Contact #1</Label>
                                <Input />
                            </Item>
                            <Item fixedLabel last>
                                <Label>Phone Number</Label>
                                <Input />
                            </Item>

                            <View style={{
                                backgroundColor: 'rgba(0,0,0,0.1)'
                            }}>
                                <Item fixedLabel >
                                    <Label>Contact #2</Label>
                                    <Input />
                                </Item>
                                <Item fixedLabel last>
                                    <Label>Phone Number</Label>
                                    <Input  />
                                </Item>

                            </View>

                            <Item fixedLabel>
                                <Label>Contact #3</Label>
                                <Input />
                            </Item>
                            <Item fixedLabel last>
                                <Label>Phone Number</Label>
                                <Input secureTextEntry />
                            </Item>
                        </Form>

                        <Grid>
                            <Col>
                                <Button block style={styles.form_button}>
                                    <Text>Edit</Text>
                                </Button>
                            </Col>
                            <Col>

                                <Button block style={styles.form_button}>
                                    <Text>Save</Text>
                                </Button>
                            </Col>
                        </Grid>


                    </Content>



                </ImageBackground>
            </Container>
        );
    }
}

export default Emergency_Contacts;