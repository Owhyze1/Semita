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



class Emergency_Time_Period extends Component {
    render() {
        return (
            <Container >


                <Grid style={styles.header}>
                    <Col size={1} >

                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{ color: 'white' }} active name="home" />
                        </Button>
                    </Col>
                    <Col size={4}>
                        <View>
                            <Title style={styles.title}>Emergency Time Period</Title>
                        </View>
                    </Col>

                    <Col size={1}>

                        <Button
                            transparent
                            style={styles.icon_button}
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
                    <Grid>
                        

                        <Row size={9}>
                            <Content>
                                <Button block style={styles.enable_button}>
                                    <Text style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: 18
                                    }}
                                    >Enable Emergency Notifications</Text>
                                </Button>





                                <Form>
                                    <Item fixedLabel>
                                        <Label>Days</Label>
                                        <Input />
                                    </Item>
                                    <Item fixedLabel>
                                        <Label>Hours</Label>
                                        <Input />
                                    </Item>
                                    <Item fixedLabel>
                                        <Label>Minutes</Label>
                                        <Input />
                                    </Item>
                                    <Item fixedLabel last>
                                        <Label>Seconds</Label>
                                        <Input />
                                    </Item>
                                </Form>

                                <Grid>
                                    <Col>
                                        <Button block style={styles.window_button}>
                                            <Text>Edit</Text>
                                        </Button>
                                    </Col>
                                    <Col>

                                        <Button block style={styles.window_button}>
                                            <Text>Save</Text>
                                        </Button>
                                    </Col>
                                </Grid>

                                <Button
                                    block
                                    style={styles.window_button}
                                    onPress={() => this.props.navigation.navigate("Tracking")}
                                >
                                    <Text>Start Tracking</Text>
                                </Button>

                            </Content>
                        </Row>



                        <Row size={1}>
                            <Grid >
                                <Col size={4} style={styles.footer_backround}>
                                    <View  >
                                        <Text style={styles.footer_text}>Emergency Notifications</Text>
                                    </View>
                                </Col>
                                <Col size={2} style={styles.status_background} >
                                    <View >
                                        <Text style={styles.status_text}> ENABLED</Text>
                                    </View>

                                </Col>
                            </Grid>
                        </Row>

                    </Grid>
                </ImageBackground>
                
            </Container>
        );
    }
}

export default Emergency_Time_Period;