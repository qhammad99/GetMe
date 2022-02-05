import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F4E9E9'
    },
    paginationDot:{
        backgroundColor:'rgba(0,0,0,.2)', 
        width: 30, 
        height: 8,
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    },
    paginationActiveDot:{
        backgroundColor: 'rgba(0,0,0,.7)', 
        width: 35, 
        height: 8, 
        borderRadius: 4, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    }
});

export default Styles;