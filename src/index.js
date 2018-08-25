// @flow
import { createSwitchNavigator } from 'react-navigation'
import Home from './component/screen/home'
import Auth from './component/screen/auth'

export default createSwitchNavigator(
    {
        Auth: { screen: Auth },
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Auth'
    }
)
