import { useState } from "react";
import { StyleSheet, Text, View , Image} from 'react-native';
        


export default function Loading() {
    const [loadingState, setLoadingState] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>

                <Text style={styles.font1}> Lorby </Text>
                <Text style={styles.font2}> Твой личный репетитор </Text>
            </View>
            <Image source={require('../assets/loading_image.png')} style={styles.image}/> 
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_container:{
        top: 123,
        alignItems: 'center',
        gap: '8px'
    },
    font1: {
        fontFamily: "Mplus 1p",
        fontSize: 40,
        fontWeight: 500,
    },
    font2: {
        fontFamily: "Mplus 1p",
        fontSize: 20,
        fontWeight: 400,

    },
    image: {
        width: '329.4px',
        height: '350px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        top: 180,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });