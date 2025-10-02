import { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Interruptor({nome}){
    const [ligado, setLigado] = useState(false)

    return(
        <View style={styles.container}>
            <Text>{nome}{ligado ? 'Ligado' : 'Desligado'}</Text>
            <Button title="Alternar" onPress={()=>setLigado(!ligado)}/>
        </View>
    
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 20,
        margin: 20,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
})
