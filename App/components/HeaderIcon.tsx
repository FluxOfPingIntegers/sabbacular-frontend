import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { View } from 'react-native';

type HeaderIconProps = { 
  onHeaderButtonPress: (a: string) => void;
  icon: keyof typeof Entypo.glyphMap; 
  linkRoute: string;
  align: "left" | "center" | "right";
}

const HeaderIcon: React.FC<HeaderIconProps> = ( { onHeaderButtonPress, icon, linkRoute, align } ) => {
  const findAlignment = () => {
    switch (align) {
      case "left":
        return 'flex-start'
      case "right":
        return 'flex-end'
      default:
        return 'center'
    }
  }
  const alignment = findAlignment();

  return (
    <View style={{alignItems: alignment}}>
      <TouchableOpacity
      onPress={() => onHeaderButtonPress(linkRoute)}
      style={{ paddingHorizontal: 10, justifyContent: "center", paddingVertical: "5%", a}} 
      >
        <Entypo name={icon} size={20} color={colors.offWhite}/>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderIcon