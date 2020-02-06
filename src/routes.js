import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { Ionicons } from "react-native-vector-icons";

import Home from "./screens/Home/Home";
import Bookings from "./screens/Bookings";
import Search from "./screens/Search";
import TypeAppointment from "./screens/Home/TypeAppointment ";
import SpecialitiesList from "./screens/Home/SpecialitiesList";
import Speciality from "./screens/Home/Speciality";
import Index from "./screens/Profile/Index";

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    TypeAppointment: { screen: TypeAppointment },
    SpecialitiesList: { screen: SpecialitiesList },
    Speciality: { screen: Speciality }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: ""
    }
  },
  { headerMode: "none" }
);

const IndexStack = createStackNavigator(
  {
    Index: { screen: Index }
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: ""
    }
  }
);
const BookingsStack = createStackNavigator(
  {
    Bookings: Bookings
  },
  {
    initialRouteName: "Bookings",
    defaultNavigationOptions: {
      title: ""
    }
  }
);
const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: ""
    }
  }
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Início") {
    iconName = `md-home`;
    // We want to add badges to home tab icon
  } else if (routeName === "Busca") {
    iconName = `md-search`;
  } else if (routeName === "Consultas") {
    iconName = `ios-copy`;
  } else if (routeName === "Perfil") {
    iconName = `ios-contact`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const navigator = createBottomTabNavigator(
  {
    Início: { screen: HomeStack },
    Busca: { screen: SearchStack },
    Consultas: { screen: BookingsStack },
    Perfil: { screen: IndexStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "#00c0e3",
      inactiveTintColor: "#444d50"
    }
  }
);

export default createAppContainer(navigator);
