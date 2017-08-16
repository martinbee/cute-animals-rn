import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Search from '../Search'
import AnimalList from '../AnimalList';

const Tabs = TabNavigator({
  AnimalList: {
    screen: AnimalList,
    navigationOptions: {
      tabBarLabel: 'Animal List',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
});

export default Tabs;
