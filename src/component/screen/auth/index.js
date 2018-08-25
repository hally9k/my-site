import { createStackNavigator } from 'react-navigation'
import Login from './login'
import Signup from './signup'

export default createStackNavigator(
    {
        Login: { screen: Login, navigationOptions: { title: 'Login' } },
        Signup: { screen: Signup, navigationOptions: { title: 'Signup' } }
    },
    {
        initialRouteName: 'Login'
    }
)
