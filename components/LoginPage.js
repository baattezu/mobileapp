import { Image, StyleSheet, View, TextInput, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";


export default function LoginPage(){

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/login_page_image.png')}/>
            <Text style={styles.hitext}> Вэлком бэк! </Text>
            <View style={styles.form}>
                
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="Введи логин"
                    />
                    <TextInput
                        style={styles.inputPassword}    
                        placeholder="Введи пароль"
                        secureTextEntry
                    />
                </View>
                
                <TouchableOpacity style={styles.loginButton}> Войти </TouchableOpacity>
                
                <TouchableOpacity style={styles.registerButton}> У меня еще нет аккаунта </TouchableOpacity>
            </View>
                        
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    loginButton:{
        paddingHorizontal:16,
        paddingVertical: 13,
        borderRadius: 12,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
        marginBottom: 16
    },
    registerButton:{
        paddingHorizontal:16,
        paddingVertical: 13,
        color: 'black',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: 12
    },
    inputGroup: {
        paddingHorizontal: 7
    },
    form: {
        width: '100%',
    },
    inputLogin: {
        marginBottom: 14,
        borderRadius: 12,
        paddingVertical: 13,
        paddingHorizontal: 16,
        width: '100%',
        backgroundColor: '#F8F8F8'
        
        
    },
    inputPassword: {
        
        borderRadius: 12,
        paddingVertical: 13,
        paddingHorizontal: 16,
        backgroundColor: '#F8F8F8',
        width: '100%',
        marginBottom: 24
        
    },
    image: {
        width: '179.45px',
        height: '191.28px',
        marginBottom: 35
    },
    container: {
        paddingVertical: 26,
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 9
    },
    hitext: {
        fontSize: '24px',
        marginBottom: 28
    }
});
