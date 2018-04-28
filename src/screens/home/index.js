import React, { Component } from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { Container, Button, Title, Text } from "native-base";

import styles from "./styles";

const homeScreenBackground = require("../../../assets/Semita-background-tracks.png");

class Home extends Component {

    render() {
        return (

            <Container>
                <ImageBackground
                    source={homeScreenBackground}
                    style={styles.image}
                >

                    <Title style={styles.title}>Semita</Title>

                    <Button
                        block
                        onPress={() => this.props.navigation.navigate("Tracking")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>HAPPY TRACKING!</Text>
                    </Button>

                    <Button
                        block
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>OPTIONS</Text>
                    </Button>

                </ImageBackground>
            </Container>
        );
    }
}

export default Home;



