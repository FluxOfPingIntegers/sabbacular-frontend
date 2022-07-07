import React from "react";
import { Text, View } from 'react-native';

import colors from "../constants/colors";
import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderIcon";

type NavBarProps = { navigation: any}

const NavBar: React.FC<NavBarProps> = ({navigation}) => {
  const onHeaderButtonPress = (a:string) => navigation.push(a)

  const guestNav = (
    <View style={
      {
        flex: 1, 
        flexDirection: "row", 
        backgroundColor: colors.teal, 
      }
        }>
      <View style={{ alignSelf: "center", marginRight: 'auto', flexDirection: "row"}}>
        <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="home" linkRoute="Home" />
        <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign Up"/>
      </View>
      <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign In"/>
      <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign Up"/>
      <View style={{ alignSelf: "center", marginLeft: 'auto', flexDirection: "row"}}>
        <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="menu" linkRoute="Options" />
      </View>
    </View>
  )

  return guestNav
}

export default NavBar