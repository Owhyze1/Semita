import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text
} from "native-base";
import styles from "./styles";

class Tracking extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="menu" />
                        </Button>
                    </Right>
                </Header>

                <Content padder>
                    <Text>Latitude</Text>
                    <Text>Longitude</Text>
                </Content>
            </Container>
        );
    }
}

export default Tracking;
