import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LinkRoutes, MainStackParamList } from '../constants/types';
import colors from "../constants/colors";
import {RowItem, RowSeparator} from "../components/RowItem";


type OptionsScreenProps = NativeStackScreenProps<MainStackParamList, "Options">

const Options: React.FC<OptionsScreenProps> = ({ navigation }) => {

  const DATA: {id: string, title: LinkRoutes}[] = [
    {
      id: "1",
      title: "SignIn"
    },
    {
      id: "2",
      title: "SignUp"
    },
  ]

  const renderItem: React.FC<{item: {title: LinkRoutes, id: string} }> = ({item}) => {
    return <RowItem title={item.title} navigation={navigation} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={DATA} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default Options