import {View, Text} from "react-native"
import React from "react"
import {Button} from "react-native-paper"

export const PictureScreen = ({navigation}) => {
    return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
      );
}