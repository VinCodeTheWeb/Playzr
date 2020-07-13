import React from 'react';
import { useDispatch } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';

import { TabNavigator } from './TabNavigator';

import { DrawerContent } from '~/components/DrawerContent/DrawerContent';

import { drawerItems } from './drawerConstant';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <DrawerContent
          drawerItems={drawerItems(dispatch, navigation, t)}
          navigation={navigation}
        />
      )}
    >
      <Drawer.Screen name="Drawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
