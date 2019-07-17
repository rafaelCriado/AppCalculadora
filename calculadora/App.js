import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Botao from './src/components/Botao';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = { v:'' };
  }

  executar = () =>{
    try {
      return  eval(this.state.v);
    } catch (error) {
      return 'Expressão Inválida';
    }
   }

  add = (n) => {
    try {
      if(this.state.v == 'Expressão Inválida' || this.state.v == 'Infinity' || this.state.v == 'Falha de execução' || this.state.v == 'undefined'){
        this.state.v = '';
      }

      switch (n) {
        case 'c':
          this.setState({v: ''});
          break;

        case 'l':
            let str = this.state.v;
            this.setState({v: str.substring(0,(str.length - 1))});
            break;

        case '=':
          this.setState({v: this.executar()});
          break;
      
        default:
            this.setState({v: this.state.v + n});
          break;
      }

    }catch (error) {
      this.setState({v: 'Falha de execução'});
    }
  };

  render(){
    return(
      <View style={styles.body}>
        <View style={styles.linha}>
          <Text style={styles.visor}>{this.state.v}</Text>
        </View>

        <View style={styles.linha}>
          <Botao cor='#aaa' flex='2' onPress={()=>{this.add('c')}} texto='C' />
          <Botao cor='#aaa' onPress={()=>{this.add('l')}} texto='L' />
          <Botao cor='#ed5a00' onPress={()=>{this.add('/')}} texto='/' />
        </View>

        <View style={styles.linha}>
          <Botao cor='#ddd' onPress={()=>{this.add('1')}} texto='1' />
          <Botao cor='#ddd' onPress={()=>{this.add('2')}} texto='2' />
          <Botao cor='#ddd' onPress={()=>{this.add('3')}} texto='3' />
          <Botao cor='#ed5a00' onPress={()=>{this.add('*')}} texto='*' />
        </View>

        <View style={styles.linha}>
          <Botao cor='#ddd' onPress={()=>{this.add('4')}} texto='4' />
          <Botao cor='#ddd' onPress={()=>{this.add('5')}} texto='5' />
          <Botao cor='#ddd' onPress={()=>{this.add('6')}} texto='6' />
          <Botao cor='#ed5a00' onPress={()=>{this.add('+')}} texto='+' />
          
        </View>

        <View style={styles.linha}>
          <Botao cor='#ddd' onPress={()=>{this.add('7')}} texto='7' />
          <Botao cor='#ddd' onPress={()=>{this.add('8')}} texto='8' />
          <Botao cor='#ddd' onPress={()=>{this.add('9')}} texto='9' />
          <Botao cor='#ed5a00' onPress={()=>{this.add('-')}} texto='-' />
        </View>

        <View style={styles.linha}>
          <Botao cor='#aaa' flex='2' onPress={()=>{this.add('0')}} texto='0' />
          <Botao cor='#aaa' onPress={()=>{this.add('.')}} texto='.' />
          <Botao cor='#ed5a00' onPress={()=>{this.add('=')}} texto='=' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection:'column'
  },
  linha:{
    flex:1,
    flexDirection:'row'
  },
  visor:{
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 40,
    textAlign: "right",
    fontWeight: "bold",
    alignContent: 'stretch',
    flex: 1
  }

});