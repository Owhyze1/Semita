import React, { Component } from "react";

import {
    Container,
    Header, Left, Body, Right,
    Content,
    Button,
    Icon,
    Card, CardItem,
    Text,

} from "native-base";
import { Row, Col, Grid } from 'react-native-easy-grid';
import { ImageBackground, View, TextInput } from 'react-native';
import styles from "./styles";

const screenBackground = require("../../../assets/Semita-background-tracks.png");



class Emergency_Time_Period extends Component {
    render() {
        return (
            <Container style={styles.container}>


                <Grid style={styles.header}>
                    <Col >

                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <Icon style={{ color: 'white' }} active name="home" />
                        </Button>
                    </Col>
                    <Col>

                        <Button
                            transparent
                            style={styles.button}
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




                    <View style={styles.main_window}>
                        <Text>Emergency Time Period Screen</Text>
                    </View>



                </ImageBackground>
            </Container>
        );
    }
}

export default Emergency_Time_Period;