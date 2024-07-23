import { Image, View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

