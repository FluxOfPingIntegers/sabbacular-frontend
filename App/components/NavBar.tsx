import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import colors from "../constants/colors";
import { LinkRoutes } from "../constants/types";
import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderIcon";

type NavBarProps = { navigation: any, title: "Home" | "Options" | "Sign In" | "Sign Up" }

const NavBar: React.FC<NavBarProps> = ({navigation, title}) => {
  const onHeaderButtonPress = (a:string) => navigation.push(a)

  const guestNav = (
    <View style={ styles.navContainer }>
      <View style={ styles.leftNavContainer }>
        <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="home" linkRoute="Home" />
        <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Sign Up"/>
      </View>
      <View style={ styles.centerNavContainer}>
        <Text style={ styles.navTitleText }>{title}</Text>
      </View>
      <View style={ styles.rightNavContainer }>
        <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="menu" linkRoute="Options" />
      </View>
    </View>
  )

  return guestNav
}

const styles = StyleSheet.create({
  centerNavContainer: {
    flex: 2,
    alignSelf: "center",
    marginHorizontal: "center"
  },
  leftNavContainer: {
    flex: 1,
    alignSelf: "center", 
    marginRight: 'auto', 
    flexDirection: "row"
  },
  navContainer: {
    flex: 1, 
    flexDirection: "row", 
    backgroundColor: colors.teal, 
  },
  navTitleText: {
    fontSize: 20, 
    color: colors.offWhite, 
    textAlign: "center"
  },
  rightNavContainer: { 
    flex: 1,
    alignSelf: "center", 
    marginLeft: 'auto', 
    flexDirection: "row-reverse"
  },
})

export default NavBar