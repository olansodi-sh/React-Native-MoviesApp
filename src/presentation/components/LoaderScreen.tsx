import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoaderScreen = () => {
  return (
    <React.Fragment>
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator size="large" color={"indigo"} />
        </View>
    </React.Fragment>
  )
}

export default LoaderScreen