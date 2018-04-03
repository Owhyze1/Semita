import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    return (
      <Container style>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 40,
              backgroundColor: "transparent"
            }}
          >

            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 150 }}>
            <Button
              style={{ backgroundColor: "#FFF", color: 'yellow', borderRadius: 20,
               alignSelf: 'stretch', marginLeft: 50, marginRight:50 }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text style={{color: 'red', alignText: 'center', paddingLeft: 80, paddingRight:80, lineHeight:13,
              fontSize:15}}>Sign Up with Email</Text>
            </Button>
            <Button
              style={{ backgroundColor: "#3B5998", color: 'yellow', borderRadius: 20,
               alignSelf: 'stretch', marginLeft: 50, marginRight:50, marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text style={{color: '#FFF', alignText: 'center', paddingLeft: 80, paddingRight:80, lineHeight:15,
              fontSize:15}}>Login with Facebook</Text>
            </Button>
            <View style={{ marginTop: 20, alignText: "center" }} />
            <Text style={{paddingLeft: 100, paddingRight:100, color: 'white', justifyContent:'center',
lineHeight:13,
fontSize:13}}
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >I already have an account
            </Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
