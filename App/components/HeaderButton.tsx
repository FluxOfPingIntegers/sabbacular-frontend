import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import colors from '../constants/colors';
import { PageTitles } from '../constants/types';

type HeaderButtonProps = { onHeaderButtonPress: (a: string) => void; name: PageTitles}

const HeaderButton: React.FC<HeaderButtonProps> = ( { onHeaderButtonPress, name } ) => {
  const linkRoute = name.split(" ").join("")

  return (
    <TouchableOpacity
    onPress={() => onHeaderButtonPress(linkRoute)}
    style={{ paddingHorizontal: 10, justifyContent: "center", paddingVertical: "5%" }} 
  >
    <Text style={{fontSize: 20, color: colors.offWhite }}>{name}</Text>
  </TouchableOpacity>
  )
}

export default HeaderButton