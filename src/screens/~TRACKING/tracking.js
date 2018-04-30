import React, { Component } from "react";
import { Container, Button, Icon, Card, CardItem, Text, H1 } from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import { ImageBackground, View, TextInput } from 'react-native';
import styles from "./styles";

const screenBackground = require("../../../assets/Semita-background-tracks.png");

class Tracking extends Component {

    // Constructor and componentDidMount function found at
    // https://hackernoon.com/react-native-basics-geolocation-adf3c0d10112

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null
        };
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
        );
    }


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
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>ENABLED</Text>
                            </Col>

                            <Col size={5} style={styles.header_labels}>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>EMERGENCY NOTIFICATIONS</Text>
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
                                        <H1>{this.state.latitude}</H1>
                                    </CardItem>
                                </Card>

                                <Card style={styles.card}>
                                    <CardItem bordered style={styles.card_item}>
                                        <H1 style={{ fontWeight: 'bold' }}>Longitude</H1>
                                    </CardItem>
                                    <CardItem style={styles.card_item}>
                                        <H1>{this.state.longitude}</H1>
                                    </CardItem>
                                </Card>
                                {this.state.error ? <Text>ERROR!! {this.state.error}</Text>: null}
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