import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigatorParamList = {
  BottomBar: NavigatorScreenParams<BottomBarNavigatorParamList>;
  Inbox: undefined;
};

export type BottomBarNavigatorParamList = {
  Main: undefined;
  User: undefined;
};

export type MainScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<BottomBarNavigatorParamList, 'Main'>,
  NativeStackScreenProps<RootNavigatorParamList>
>;

export type UserScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomBarNavigatorParamList, 'User'>,
  NativeStackScreenProps<RootNavigatorParamList>
>;

export type InboxScreenProps = NativeStackScreenProps<
  RootNavigatorParamList,
  'Inbox'
>;
