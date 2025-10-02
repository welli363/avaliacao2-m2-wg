import { StyleSheet, Text, View } from 'react-native';
import Interruptor from "../components/Interruptor";

export default function PainelDeControleScreen (){
    return(
    <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 30}}>Painel de Controle da Casa</Text>
        <Interruptor nome={'Luz da Cozinha: '}/>
        <Interruptor nome={' Luz da Sala: '}/>
        <Interruptor nome={' Luz do Quarto: '}/>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });