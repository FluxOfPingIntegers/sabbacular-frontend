import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import colors from '../constants/colors';

type HeaderButtonProps = { onHeaderButtonPress: (a: string) => any; name: string}

const HeaderButton: React.FC<HeaderButtonProps> = ( { onHeaderButtonPress, name } ) => {
  const linkRoute = name.split(" ").join("")

  return (
    <TouchableOpacity
    onPress={() => onHeaderButtonPress(linkRoute)}
    style={{ paddingHorizontal: 10, justifyContent: "center" }} 
  >
    <Text style={{fontSize: 20, color: colors.orange }}>{name}</Text>
  </TouchableOpacity>
  )
}

export default HeaderButton