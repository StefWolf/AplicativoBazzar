import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {Cat} from '../styles/index';

class Categoria extends Component{
    render(){
        return(
            <View style = {Cat.caixao}>
                <Text style = {Cat.ti}>Categoria</Text>
                <TouchableOpacity>
                    <Image source = {require('../img/blusa.png')} style = {Cat.image} />
                    <Text style = {Cat.titulo}>Blusa</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('../img/calca.png')} style = {Cat.image} />
                    <Text style = {Cat.titulo}>Calça</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('../img/saias.png')} style = {Cat.image} />
                    <Text style = {Cat.titulo}>Saia</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('../img/moletom.png')} style = {Cat.image} />
                    <Text style = {Cat.titulo}>Moletom</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source = {require('../img/vestido.png')} style = {Cat.image} />
                    <Text style = {Cat.titulo}>Vestido</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Categoria;