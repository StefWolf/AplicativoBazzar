import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Pai = StyleSheet.create({
    papai : {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#484341'
    },
    filhote : {
        width: wp('100%'),
        height: 1900,
        backgroundColor: 'white'
    },
    produtos : {
        width: wp('98%'),
        marginLeft: '1%',
    }
});

const Cab = StyleSheet.create({
    fundoCab : {
        backgroundColor: '#484341',
        width: wp('100%'),
        height: hp('8%'),
        flexDirection: 'row',
        marginTop: 25,
        opacity: 0.9,
    },
    cabtitle : {
        textAlign: 'center',
        width: wp('48%'),
        height: hp('80%'),
        marginTop: '1%',
        marginLeft: '4%'
    },
    texttitle : {
        color: 'white',
        fontSize: 30,
    },
    iconlist : {
        width: wp('20%'),
        height: hp('86%'),
        alignItems: 'center',
        
    },
    imagelist : {
        width: wp('57%'),
        height: hp('74%')
    },
    outrosicons : {
        width: wp('30%'),
        height: hp('80%'),
        marginTop: '1%',
        flexDirection: 'row',
        marginLeft: '12%'
    },
    iconsoutros : {
        marginRight: '8%'
    }
    
});

const Desq = StyleSheet.create({
    fundoimage : {
        width: wp('100%'),
        height: hp('30%')
    },
    caixotedesconto : {
        width: wp('50%'),
        height: hp('25%'),
        marginTop: '2%',
        alignItems: 'center'
    },
    textdesq : {
        textAlign: 'center',
        fontSize: 35,
        color: 'white'
    },
    botaodesq : {
        backgroundColor: 'red',
        width: wp('30%'),
        height: hp('7%'),
        marginTop: '10%',
        borderRadius: 5
    },
    textbotaodesq : {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
        marginTop: '3%',
    }

});

const Sau = StyleSheet.create({
    titulo : {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: '3%',
        marginTop:'0%'
    },
    texto : {   
        fontSize: 18,
        textAlign: 'center',
        marginLeft: '8%',
        marginRight: '8%',
    },
    fundo : {
        backgroundColor: 'white',
        width: wp('90%'),
        height: hp('30%'),
        opacity: 0.7,
        borderBottomColor: '#191007',
        borderBottomWidth: 0.4,
        borderTopColor: '#191007',
        borderTopWidth: 0.4,
        marginLeft: '5%',
        marginTop:'10%',
        marginBottom: '10%'
    
    }

});

const Prod = StyleSheet.create({
    feminino : {
        width: wp('100%'),
        height: hp('80%'),
        backgroundColor: 'white',
        alignItems: 'center'
    },
    masculino : {
        width: wp('100%'),
        height: hp('80%'),
        backgroundColor: 'white',
        alignItems: 'center'
    },
    titulsex : {
        fontSize: 30,
        color: '#3B170B',
        textAlign: 'center',
        marginBottom: '8%'
    },
    imagestyle : {
        width: 350,
        height: 400,
    },
    compart : {
        width: 390,
        height: 500,
        marginLeft: 30
        
    },
    compartpreco : {
        width: wp('90%'),
        height: hp('15%'),
        opacity: 0.7,
        borderBottomColor: '#F6D8CE',
        borderBottomWidth: 1,
        marginTop: '2%',
        flexDirection: 'row'

    },
    preco : {
        backgroundColor: 'white',
        width: wp('50%'),
        height: hp('90%'),
    },
    textopreco : {
        fontSize: 18,
        textAlign: 'center'
    },
    botaopreco : {
        backgroundColor: '#FF0000',
        width: wp('30%'),
        height: hp('8%'),
        borderRadius: 3,
        marginLeft: '1%'

    },
    textbotaopreco : {
        fontSize: 23,
        textAlign: 'center',
        color: 'white',
        marginTop: '5%',
    },
    acessibilidade : {
        width: '100%',
        height: '100%'
    }

});
const ende = StyleSheet.create({
    fundoende : {
        backgroundColor: '#F7F7F7',
        width: wp('98%'),
        height: hp('20%'),
        
    },
    endereco : {
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 16
    }
});
const siga = StyleSheet.create({
    caixonasiga : {
        backgroundColor: '#484341',
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        paddingTop: '3%'
    },
    textosiga : {
        color: 'white',
        fontSize: 20,
        marginLeft: '6%'
    },
    logo : {
        marginLeft: '4%'
    }
});
const Cat = StyleSheet.create({
    caixao : {
        width: '90%',
        height: '86%',
        backgroundColor: 'white',
        marginLeft: '5%',
        marginTop: '1%',
        alignItems: 'center',
        opacity: 0.9
    },
    image : {
        width: 220,
        height: 220,
        marginBottom: '0%',
        opacity: 0.6
    },
    titulo : {
        color: 'black',
        fontSize: 33,
        textAlign: 'center',
        marginBottom: '8%',
        opacity: 0.5
    },
    ti : {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        marginBottom: '10%'
    }
});
const Sob = StyleSheet.create({
    caixona : {
        backgroundColor: 'red',
        width: '80%',
        height: '13%',
        marginLeft: '10%',
        marginTop: '10%',
        opacity: 0.8,
        borderColor: '#c40000',
        borderWidth: 1,
        padding: '3%'
    },
    texto : {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '10%'
    },
    image : {
        width: '80%',
        height: '10%',
        marginLeft: '10%'
    },
    outroTexto : {
        fontSize: 20,
        textAlign: 'center',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%'
    },
    titulo : {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        marginTop: '8%'
    },
    outraImage : {
        width: '80%',
        height: '15%',
        marginLeft: '10%',
        marginTop: '14%'
    }
});
const Cart = StyleSheet.create({
    cabine : {
        width: '90%',
        marginLeft: '5%',
        height: '50%',
        alignItems: 'center'
    },
    image : {
        width: '50%',
        height: '20%',
    },
    titulo : {
        fontSize: 30,

    }
});
export {Cab, Desq, Sau, Pai, Prod, ende, siga, Cat, Sob, Cart };