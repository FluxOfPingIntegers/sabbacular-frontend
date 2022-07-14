import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import colors from '../constants/colors';
import { LinkRoutes, PageTitles } from '../constants/types';

type HeaderButtonProps = { onHeaderButtonPress: (a: string) => void; route: LinkRoutes, name: string}

const HeaderButton: React.FC<HeaderButtonProps> = ( { onHeaderButtonPress, route, name } ) => {

  return (
    <TouchableOpacity
    onPress={() => onHeaderButtonPress(route)}
    style={{ paddingHorizontal: 10, justifyContent: "center", paddingVertical: "5%" }} 
  >
    <Text style={{fontSize: 20, color: colors.offWhite }}>{name}</Text>
  </TouchableOpacity>
  )
}

export default HeaderButton