import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { View } from 'react-native';

type HeaderIconProps = { 
  onHeaderButtonPress: (a: string) => void;
  icon: keyof typeof Entypo.glyphMap; 
  linkRoute: string;
}

const HeaderIcon: React.FC<HeaderIconProps> = ( { onHeaderButtonPress, icon, linkRoute } ) => {

  return (
      <TouchableOpacity
      onPress={() => onHeaderButtonPress(linkRoute)}
      style={{ paddingHorizontal: 20, paddingVertical: "5%"}} 
      >
        <Entypo name={icon} size={20} color={colors.offWhite}/>
      </TouchableOpacity>
  )
}

export default HeaderIcon