import React, {Component} from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class Botao extends Component{

    constructor(props){
        super(props);
        this.state = {};

        this.texto = this.props.texto? this.props.texto: 'Botão';
        
        this.styles = StyleSheet.create({
            botao:{
              backgroundColor: (this.props.cor? this.props.cor:'#999'),
              flex: (this.props.flex? parseInt(this.props.flex):1),
              alignItems: "center",
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor:'#999'
            },
            texto: {
              textAlign: "center",
              fontSize:22  
            }
          });
    }

  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <Text style={this.styles.texto}>{this.texto}</Text>
      </TouchableOpacity>
    );
  }
} 