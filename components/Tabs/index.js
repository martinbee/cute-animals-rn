import React from 'react';
import { TabNavigator } from 'react-navigation';

import Search from '../Search;'
import AnimalList from '../AnimalList';

export const Tabs = TabNavigator({
  AnimalList: {
    screen: AnimalList,
  },
  Search: {
    screen: Search,
  },
});
