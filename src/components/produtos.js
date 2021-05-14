import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import {Prod} from '../styles/index';

class Produtos extends Component{
    render(){
        return(
            <View>
                <View style = {Prod.feminino}>
                    <Text style = {Prod.titulsex}>Moda Feminina</Text>
                    <ScrollView horizontal = {true}>
                        <View style = {Prod.compart}>
                            <TouchableOpacity accessible = {true} accessibilityLabel = {'toque'} onPress = {this._onPress}>
                                <ImageBackground source = {require('../img/produto1.png')} style = {Prod.imagestyle}>
                                    <View>
                                        
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style = {Prod.compartpreco}>
                                <View style = {Prod.preco}>
                                    <Text style = {Prod.textopreco}>Vestido gins</Text>
                                    <Text style = {Prod.textopreco}>R$ 120,00</Text>
                                </View>
                                <View style = {Prod.preco}>
                                    <TouchableOpacity style = {Prod.botaopreco}>
                                        <Text style = {Prod.textbotaopreco}>Comprar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style = {Prod.compart}>
                            <TouchableOpacity accessible = {true} accessibilityLabel = {'toque'} onPress = {this._onPress}>
                                <ImageBackground source = {require('../img/produto4.jpg')} style = {Prod.imagestyle}>
                                    <View>
                                        
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style = {Prod.compartpreco}>
                                <View style = {Prod.preco}>
                                    <Text style = {Prod.textopreco}>Vestido estampado</Text>
                                    <Text style = {Prod.textopreco}>R$ 200,00</Text>
                                </View>
                                <View style = {Prod.preco}>
                                    <TouchableOpacity style = {Prod.botaopreco}>
                                        <Text style = {Prod.textbotaopreco}>Comprar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView> 

                </View>
                <View style = {Prod.masculino}>
                    <Text style = {Prod.titulsex}>Moda Masculina</Text>
                    <ScrollView horizontal = {true}>
                        <View style = {Prod.compart}>
                            <TouchableOpacity accessible = {true} accessibilityLabel = {'toque'} onPress = {this._onPress}>
                                <ImageBackground source = {require('../img/produto3.png')} style = {Prod.imagestyle}>
                                    <View>
                                        
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style = {Prod.compartpreco}>
                                <View style = {Prod.preco}>
                                    <Text style = {Prod.textopreco}>Blusa indiana</Text>
                                    <Text style = {Prod.textopreco}>R$ 100,00</Text>
                                </View>
                                <View style = {Prod.preco}>
                                    <TouchableOpacity style = {Prod.botaopreco}>
                                        <Text style = {Prod.textbotaopreco}>Comprar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style = {Prod.compart}>
                            <TouchableOpacity accessible = {true} accessibilityLabel = {'toque'} onPress = {this._onPress}>
                                <ImageBackground source = {require('../img/produto2.png')} style = {Prod.imagestyle}>
                                    <View>
                                        
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style = {Prod.compartpreco}>
                                <View style = {Prod.preco}>
                                    <Text style = {Prod.textopreco}>Blusa indiana</Text>
                                    <Text style = {Prod.textopreco}>R$ 100,00</Text>
                                </View>
                                <View style = {Prod.preco}>
                                    <TouchableOpacity style = {Prod.botaopreco}>
                                        <Text style = {Prod.textbotaopreco}>Comprar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
export default Produtos;