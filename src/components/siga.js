import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {siga} from '../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

class Siga extends Component{
    render(){
        return(
            <View style = {siga.caixonasiga}>
                <Text style = {siga.textosiga}>Siga-nos:</Text>
                <View style = {siga.logo}>
                    <Icon name = 'logo-facebook' size = {30} color = "white" />
                </View>
                <View style = {siga.logo}>
                    <Icon name = 'logo-instagram' size = {30} color = "white" />
                </View>
                <View style = {siga.logo}>
                    <Icon name = 'logo-pinterest' size = {30} color = "white" />
                </View>
                <View style = {siga.logo}>
                    <Icon name = 'logo-snapchat' size = {30} color = "white" />
                </View>
                <View style = {siga.logo}>
                    <Icon name = 'logo-twitter' size = {30} color = "white" />
                </View>
            </View>
        );
    }
}
export default Siga;