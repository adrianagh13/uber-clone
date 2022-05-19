import React from "react";
import { FlatList, TouchableOpacity, Text, View, Image} from "react-native";
import { Icon } from "react-native-elements";
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  }
]

const NavOptions = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw `p-2 pl-10 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image 
              style={{
                width: 120, 
                height: 120, 
                resizeMode: "contain"
              }}
              source={{uri: item.image}}/>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon 
              type="antdesign" 
              name="arrowright" 
              color="white"
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions;