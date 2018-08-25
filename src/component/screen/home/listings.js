// @flow
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import { AUTH0_TOKEN_KEY, SECURE_STORAGE_OPTIONS } from 'config/auth'
import { AuthSession, SecureStore } from 'expo'

type Props = {
    navigation: {
        navigate: *
    },
    screenProps: {
        rootNavigation: *
    }
}

type State = {
    message: string
}

export default class Listings extends React.Component<Props, State> {
    state = {
        message: 'Listings'
    }

    handleClick = () => {
        this.setState({
            message: 'Listings are cool!'
        })
    }

    handleLogout = () => {
        AuthSession.dismiss()

        SecureStore.deleteItemAsync(AUTH0_TOKEN_KEY, SECURE_STORAGE_OPTIONS)

        this.props.navigation.navigate('Auth')
    }

    render() {
        const { message } = this.state

        return (
            <View style={styles.container}>
                <Text>{message}</Text>
                <Button
                    primary={true}
                    text="coolness"
                    onPress={this.handleClick}
                />
                <Button text="Logout" onPress={this.handleLogout} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
