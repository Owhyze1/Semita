import React, { Component } from "react";

import {
    Container,
    Header, 
    Title,
    Content,
    Button,
    Icon,
    Card, CardItem,
    Text,
    Left,
    Right,
    Body,
    H1, H3
} from "native-base";
import { Grid, Row, Col } from 'react-native-easy-grid';
import { ImageBackground, View } from 'react-native';
import styles from "./styles";

const screenBackground = require("../../../assets/Semita-background-tracks.png");


class Settings extends Component {
    render() {
        return (
            <Container>

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
                            <Title style={styles.title}>Settings</Title>
                        </View>
                    </Col>

                    <Col size={1}>

                        <Button
                            transparent
                            style={styles.navigate_button}
                            onPress={() => this.props.navigation.navigate("Tracking")}
                        >
                            <Icon style={{ color: 'white' }} active name="navigate" />
                        </Button>
                    </Col>
                </Grid>

                <ImageBackground
                    source={screenBackground}
                    style={styles.image}
                >

                    
                    <Button
                        block
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("User_Information")}
                    >
                        <Text>User Information</Text>
                    </Button>

                    <Button
                        block
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Emergency_Contacts")}
                    >

                        <Text>Emergency Contacts</Text>
                    </Button>
                    <Button
                        block
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Emergency_Time_Period")}
                    >

                        <Text>Emergency Time Period</Text>
                    </Button>

                    <Button
                        block
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Permissions")}
                    >

                        <Text>Permissions</Text>
                    </Button>

                </ImageBackground>
            </Container>
        );
    }
}

export default Settings;