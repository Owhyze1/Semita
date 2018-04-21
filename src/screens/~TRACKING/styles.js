import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {

    flex_one: {
        flex: 1             
    },
    header_color: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    header_status_indicator: {
        backgroundColor: '#8bc34a',
        justifyContent: 'center',
        alignItems: 'center'        
    },
    header_labels: {
        justifyContent: 'center',
        alignItems: 'center'
    },   



    card_grid: {
        flex: 3
    },
    card: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    card_item: {
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center'
    },





    
    countdown_grid: {
        flex: 4,
        
        alignItems: 'center'     
    },
    countdownText: {
        fontWeight: 'bold',
        marginTop: 5,
        alignSelf: 'center'
    }, 
    button: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignSelf: 'center'
    }
   
    
};