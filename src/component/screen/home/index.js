import { createBottomTabNavigator } from 'react-navigation'
import Listings from './listings'
import Profile from './profile'

export default createBottomTabNavigator(
    {
        Listings: {
            screen: Listings,
            navigationOptions: { title: 'Listings' }
        },
        Profile: { screen: Profile, navigationOptions: { title: 'Profile' } }
    },
    {
        initialRouteName: 'Listings'
    }
)
