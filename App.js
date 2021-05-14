import React, {Component} from 'react';

import {listenOrientationChange as loc, removeOrientationListener as rol} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home/index';
import Cartoes from './src/pages/Cartoes/index';
import Categorias from './src/pages/Categorias/index';
import Sobre from './src/pages/Sobre/index';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre : {
    name: 'ios-people'
  },
  Categorias: {
    name: 'ios-menu'
  },
  Cartoes : {
    name: 'ios-wallet'
  }
};

class App extends Component{
  componentDidMount(){
    loc(this);
  }
  componentWillUnmount(){
    rol();
  }
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={ ({route}) =>({
            tabBarIcon: ({color, size}) => {
              const {name} = icons [route.name];
              return <Icon name={name} color={color} size={size} />
            }
          }) }
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Categorias" component={Categorias} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Cartoes" component={Cartoes} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
