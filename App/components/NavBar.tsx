import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import colors from "../constants/colors";
import { PageTitles } from "../constants/types";
import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderIcon";

type NavBarProps = { navigation: any, title: PageTitles }

const NavBar: React.FC<NavBarProps> = ({navigation, title}) => {
  const onHeaderButtonPress = (a:string) => a === "back" ? navigation.pop() : navigation.push(a)

  const loginIcon = <HeaderButton onHeaderButtonPress={onHeaderButtonPress} name="Login" route="Login"/>
  const loginBackIcon = <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="arrow-left" linkRoute="back" />
  const optionsIcon = <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="menu" linkRoute="Options" />
  const OptionsBackIcon = <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="cross" linkRoute="back" />

  const iconState = (title: PageTitles, position: "left" | "right") => {
    const loginTest = () => title === "Login" || title === "Sign In" || title === "Sign Up"

    if (position === "left") {
      return loginTest() ? loginBackIcon : loginIcon;
    } else {
      return title === "Options" ? OptionsBackIcon : optionsIcon;
    }
  }
  const leftIconState = iconState(title, "left");
  const rightIconState = iconState(title, "right");

  return (
    <View style={ styles.navContainer }>
      <View style={ styles.leftNavContainer }>
        <HeaderIcon onHeaderButtonPress={onHeaderButtonPress} icon="home" linkRoute="Home" />
        {leftIconState}
      </View>
      <View style={ styles.centerNavContainer}>
        <Text style={ styles.navTitleText }>{title}</Text>
      </View>
      <View style={ styles.rightNavContainer }>
        {rightIconState}
      </View>
    </View>
  )
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