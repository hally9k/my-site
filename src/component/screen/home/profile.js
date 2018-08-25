import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-material-ui'

export default class Profile extends React.Component {
    state = {
        message: 'Profiles'
    }

    handleClick = () => {
        this.setState({
            message: 'Profiles are cool!'
        })
    }

    render() {
        const { message } = this.state

        return (
            <View style={styles.container}>
                <Text>{message}</Text>
                <Button primary={true} text="Boom!" onPress={this.handleClick} />
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
