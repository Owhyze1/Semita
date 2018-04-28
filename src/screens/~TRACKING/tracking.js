import React, { Component } from "react";

import {
    Container, 
    Header,
    Content,
    Button,
    Icon,
    Card, CardItem,
    Text,    
    H1
} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import { ImageBackground, View, TextInput } from 'react-native';
import styles from "./styles";

const screenBackground = require("../../../assets/Semita-background-tracks.png");



class Tracking extends Component {
    render() {
        return (
            <Container>

                <ImageBackground
                    source={screenBackground}
                    style={styles.flex_one}
                >
                    <View style={styles.flex_one}>
                                                

                        <Grid style={styles.header_color}>
                            <Col size={2} style={styles.header_status_indicator}>
                                <Text style={{ fontWeight: 'bold' }}>ENABLED</Text>
                            </Col>

                            <Col size={5} style={styles.header_labels}>
                                <Text style={{ color: 'white' }}>EMERGENCY NOTIFICATIONS</Text>
                            </Col>

                            <Col size={1} style={styles.header_labels}>
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate("Settings")}
                                >
                                    <Icon style={{ color: 'white' }} active name="settings" />
                                </Button>
                            </Col>
                        </Grid>


                        <Grid style={styles.card_grid}>
                            
                            <Row style={{ alignItems: 'center' }}>
                                <Card style={styles.card}>
                                    <CardItem bordered style = {styles.card_item} >
                                        <H1 style={{ fontWeight: 'bold' }}>Latitude</H1>
                                    </CardItem>
                                    <CardItem style={styles.card_item}>
                                        <H1>38.91265</H1>
                                    </CardItem>
                                </Card>

                                <Card style={styles.card}>
                                    <CardItem bordered style={styles.card_item}>
                                        <H1 style={{ fontWeight: 'bold' }}>Longitude</H1>
                                    </CardItem>
                                    <CardItem style={styles.card_item}>
                                        <H1>-76.8475</H1>
                                    </CardItem>
                                </Card>
                            </Row>
                        </Grid>


                        <Grid style={styles.countdown_grid}>
                            <Row size={10}>
                                <Text style={{ fontWeight: 'bold' }}>Notification Countdown Timer</Text>
                            </Row>

                            <Row size={25}>
                                                    
                                <Col>
                                    <Button large disabled style={styles.button}>
                                        <Text>00</Text>
                                    </Button>
                                    <Text style={styles.countdownText}>Days</Text>
                                </Col>
                                <Col>
                                    <Button large disabled style={styles.button}>
                                        <Text>15</Text>
                                    </Button>
                                    <Text style={styles.countdownText}>Hours</Text>
                                </Col>
                                <Col>
                                    <Button large disabled style={styles.button}>
                                        <Text>45</Text>
                                    </Button>
                                    <Text style={styles.countdownText}>Minutes</Text>
                                </Col>
                                <Col> 
                                    <Button large disabled style={styles.button}>
                                        <Text>30</Text>
                                    </Button>
                                    <Text style={styles.countdownText}>Seconds</Text>
                                </Col>
                            
                            </Row>
                            <Row size={35}/>
                        </Grid>

                    
                </View>
                </ImageBackground>
               
            </Container>
        );
    }
}

export default Tracking;



/* saving */

/*
<Row size={4} />

    <Row size={1} style={{ justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>NOTIFICATION COUNTDOWN</Text>
        <Button disabled><Text>Test</Text></Button>
    </Row>

    <Row size={1} style={{ margin: 10 }}>
        <Card style={styles.row}>
            <CardItem>
                <Text>0</Text>
            </CardItem>
        </Card>

        <Card>
            <CardItem>
                <Text>2</Text>
            </CardItem>

        </Card>

        <Card>
            <CardItem>
                <Text>30</Text>
            </CardItem>

        </Card>

        <Card>
            <CardItem>
                <Text>30</Text>
            </CardItem>

        </Card>
    </Row>

    <Row size={1}>
        <Card>
            <CardItem>
                <Text>Days</Text>
            </CardItem>
        </Card>

        <Card>
            <CardItem>
                <Text>Hours</Text>
            </CardItem>
        </Card>

        <Card>
            <CardItem>
                <Text>Mnutes</Text>
            </CardItem>
        </Card>

        <Card>
            <CardItem>
                <Text>Seconds</Text>
            </CardItem>
        </Card>
    </Row>

    <Row size={2} />
    */