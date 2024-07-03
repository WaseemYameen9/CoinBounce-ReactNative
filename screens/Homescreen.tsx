import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity ,ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "./Notifications";
import MoreScreen from "./MoreScreen";
import Bookings from "./Bookings";
import Icon from "react-native-vector-icons/FontAwesome";
import SignInScreen from "./SignInScreen";
import Blog from "../components/blog";
import useNewsAPI from "../customhooks/useNewsAPI";

const Tab = createBottomTabNavigator();

function InnerHomeScreen() {
  
  const [category, setCategory] = useState('education');
  const { data, loading, error } = useNewsAPI(category);


  if(loading){
    return (
      <View style={[styles.body]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={[styles.header, category === 'education' ? { backgroundColor: 'blue' } : null]} onPress={()=>setCategory('education')}>
        <Text style={{color: 'white'}}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.header, category === 'crimes' ? { backgroundColor: 'blue' } : null]} onPress={()=>setCategory('crimes')}>
        <Text style={{color: 'white'}}>Crimes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.header, category === 'entertainment' ? { backgroundColor: 'blue' } : null]} onPress={()=>setCategory('entertainment')}>
        <Text style={{color: 'white'}}>Entertainment</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop: '80%'}}>
      <ActivityIndicator color={'white'} size={70}></ActivityIndicator>
      </View>
      </View>
    )
  }
  else if(error){
    <View style={[styles.body,{justifyContent:'center'}]}>
      <Text style={{color: 'white'}}>Error</Text>
      </View>
  }
  else{
  return (
    <View style={styles.body}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={[styles.header, category === 'education' ? { backgroundColor: 'blue' } : null]} onPress={()=>setCategory('education')}>
        <Text style={{color: 'white'}}>Education</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.header, category === 'crimes' ? { backgroundColor: 'blue' } : null]} onPress={()=>setCategory('crimes')}>
        <Text style={{color: 'white'}}>Crimes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.header, category === 'entertainment' ? { backgroundColor: 'blue' } : null]} onPress={()=>setCategory('entertainment')}>
        <Text style={{color: 'white'}}>Entertainment</Text>
      </TouchableOpacity>
      </View>


    <ScrollView contentContainerStyle={styles.contentContainer}>
      
      {data?.map((article: any, index: number) => (
          <Blog
            key={index}
            author={article.author}
            title={article.title}
            description={article.description}
            date={article.publishedAt}
          />
        ))}
    </ScrollView>
    </View>
  );

}
}

function HomeScreen(props: any) {
  const state = useSelector((state: any) => state);
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { height: 75, paddingBottom: 10, backgroundColor: 'black' },
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: 'white'
    }}>
      <Tab.Screen name="Home" component={InnerHomeScreen} options={{ tabBarIcon: () => <Icon name="home" size={20} color={'white'} /> }} />
      <Tab.Screen name="Create Post" component={state.userData.auth ? Bookings : SignInScreen} options={{ tabBarIcon: () => <Icon name="edit" size={20} color={'white'} /> }} />
      <Tab.Screen name="Notifications" component={state.userData.auth ? Notifications : SignInScreen} options={{ tabBarIcon: () => <Icon name="bell" size={20} color={'white'} /> }} />
      <Tab.Screen name="Profile" component={state.userData.auth ? MoreScreen : SignInScreen} options={{ tabBarIcon: () => <Icon name="user" size={20} color={'white'} /> }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    margin: 0,
    padding: 0,
    paddingHorizontal: 30,
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  header:{
    backgroundColor: 'black',
    marginTop: 20, 
    marginBottom: 30,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10, 
    padding: 10
  }
});

export default HomeScreen;
