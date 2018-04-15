import React, { Component } from "react";
import { ImageBackground, Text, View } from "react-native";
import { Container, Button } from "native-base";

import styles from "./styles";

const homeScreenBackground = require("../../../assets/Semita-background-tracks.png");

class Home extends Component {
    
    render() {
        return (
            <Container>                
                <ImageBackground source={homeScreenBackground} style={styles.image} >
                    
                    <View style={{ justifyContent: 'center' }}>

                        <Text style={styles.title}>Semita</Text>
                        <Button                            
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>HAPPY TRACKING!</Text>
                        </Button>
                    </View>

               </ImageBackground>                 
            </Container>
        );
    }
}

export default Home;





/* Original Code  */


//import react, { component } from "react";
//import { imagebackground, view, statusbar } from "react-native";
//import { container, button, h3, text } from "native-base";

//import styles from "./styles";

//const launchscreenbg = require("../../../assets/launchscreen-bg.png");
//const launchscreenlogo = require("../../../assets/logo-kitchen-sink.png");

//class home extends component {
//    render() {
//        return (
//            <container>
//                <statusbar barstyle="light-content" />
//                <imagebackground source={launchscreenbg} style={styles.imagecontainer}>
//                    <view style={styles.logocontainer}>
//                        <imagebackground source={launchscreenlogo} style={styles.logo} />
//                    </view>
//                    <view
//                        style={{
//                            alignitems: "center",
//                            marginbottom: 50,
//                            backgroundcolor: "transparent"
//                        }}
//                    >
//                        <h3 style={styles.text}>app to showcase</h3>
//                        <view style={{ margintop: 8 }} />
//                        <h3 style={styles.text}>nativebase components</h3>
//                        <view style={{ margintop: 8 }} />
//                    </view>
//                    <view style={{ marginbottom: 80 }}>
//                        <button
//                            style={{ backgroundcolor: "#6faf98", alignself: "center" }}
//                            onpress={() => this.props.navigation.navigate("draweropen")}
//                        >
//                            <text>lets go!</text>
//                        </button>
//                    </view>
//                </imagebackground>
//            </container>
//        );
//    }
//}

//export default Home;
//class Home extends Component {
//  render() {
//    return (
//      <Container style>
//        <StatusBar barStyle="light-content" />
//        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>

//          <View style={styles.logoContainer}> </View>

//          <View
//            style={{
//              alignItems: "center",
//              marginBottom: 40,
//              backgroundColor: "transparent"
//            }}
//          >
//
//            <View style={{ marginTop: 8 }} /> </View>
//
//          <View style={{ marginBottom: 150 }}>
//            <Button
//                style={{
//                    backgroundColor: "#FFF",
//                    color: 'yellow',
//                    borderRadius: 20,
//                    alignSelf: 'stretch', marginLeft: 50, marginRight:50
//                     }}
//              onPress={() => this.props.navigation.navigate("DrawerOpen")} >
//                  <Text style={{
//                            color: 'red',
//                            alignText: 'center',
//                            paddingLeft: 80, paddingRight:80,
//                            lineHeight:13,
//                            fontSize:15}}>
//
//                            Welcome to Semita
//                  </Text>
//            </Button>

/* LOGIN WITH FACEBOOK BUTTON */
//            <Button
//                style={{
//                    backgroundColor: "#3B5998",
//                    color: 'yellow',
//                    borderRadius: 20,
//                    alignSelf: 'stretch',
//                    marginLeft: 50, marginRight:50, marginTop: 20 }}
//                           onPress={() => this.props.navigation.navigate("DrawerOpen")} >
//
//              <Text style={{
//                    color: '#FFF',
//                    alignText: 'center',
//                    paddingLeft: 80, paddingRight:80,
//                    lineHeight:15,
//                    fontSize:15}}>
//
//                    Login with Facebook
//               </Text>
//
//            </Button>

/* TEXT : HAVE ACCOUNT ALREADY */
//            <View style={{ marginTop: 20, alignText: "center" }} />
//            <Text style={{
//                    paddingLeft: 100, paddingRight:100,
//                    color: 'white',
//                    justifyContent:'center',
//                    lineHeight:13, fontSize:13
//                    }}
//                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
//
//                    I already have an account
//            </Text>
//
//          </View>
//        </ImageBackground>
//      </Container>
//    );
//  }
//}

//export default Home;