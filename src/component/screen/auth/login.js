// @flow
/* eslint-disable camelcase */
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-material-ui'
// import jwtDecoder from 'jwt-decode'
import { type NavigationScreenProp } from 'react-navigation'
import { AuthSession, SecureStore } from 'expo'
import {
    AUTH0_TOKEN_KEY,
    AUTH0_CLIENT_ID,
    AUTH0_DOMAIN,
    SECURE_STORAGE_OPTIONS
} from 'config/auth'
type Props = {
    navigation: NavigationScreenProp<*>
}

function toQueryString(params: *) {
    return `?${Object.entries(params)
        .map(
            ([key, value]: *) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&')}`
}

class Login extends React.Component<Props> {
    componentDidMount = async() => {
        const token: string = await SecureStore.getItemAsync(
            AUTH0_TOKEN_KEY,
            SECURE_STORAGE_OPTIONS
        )

        if (token) {
            this.handleLoginWithAuth0()
        }
    }

    handleNavigate = (destination: string): * => {
        const { navigate } = this.props.navigation

        navigate(destination)
    }

    handleLoginWithAuth0 = async() => {
        const redirectUrl = AuthSession.getRedirectUrl()

        const url = `https://${AUTH0_DOMAIN}/authorize${toQueryString({
            client_id: AUTH0_CLIENT_ID,
            response_type: 'token',
            scope: 'openid name',
            redirect_uri: redirectUrl
        })}`

        const result = await AuthSession.startAsync({
            authUrl: url
        })

        if (result.type === 'success') {
            SecureStore.setItemAsync(
                AUTH0_TOKEN_KEY,
                result.params.access_token,
                {
                    keychainService: 'iOS',
                    keychainAccessible: SecureStore.WHEN_UNLOCKED
                }
            )
            this.handleNavigate('Home')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Button
                    primary={true}
                    text="Login!"
                    onPress={this.handleLoginWithAuth0}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Login
