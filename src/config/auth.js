// @flow
import { SecureStore } from 'expo'

export const AUTH0_DOMAIN: string = 'beaux.au.auth0.com'
export const AUTH0_CLIENT_ID: string = 'Uk-1Vox-M5oJnDiLC5b6-O4OIYsoO0SJ'
export const AUTH0_TOKEN_KEY: string = 'AUTH0_TOKEN'
export const SECURE_STORAGE_OPTIONS: * = {
    keychainService: 'iOS',
    keychainAccessible: SecureStore.WHEN_UNLOCKED
}
