import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//
//----------IMP SCREENS-----------
import Home from "../Screens/Home";
import RegisterResto from "../Screens/RegisterResto.js";
import AddUserScreen from "../Screens/RegisterUser.js";
import AddMenuResto from "../Screens/AddMenuResto.js";
import DetailsResto from "../Screens/DetailsResto";
import ProfileUser from "../Screens/ProfileUser.js";
import GlobalLogin from "../Screens/GlobalLogin.js";
import WebViewScreen from "../Screens/WebViewScreen";
import AwaitEmail from "../Screens/AwaitEmail.js";
import NavHome from "../Screens/NavHome.js";
import NavDetail from "../Screens/NavDetail";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileResto from "../Screens/ProfileResto";
import ListReviews from "../Screens/ListReviews";
import AddReviewsRestorant from "../Screens/AddReviewsRestorant"
//
//
//------------Styles y otros ---------
import globalStyles from "../Screens/GlobalStyles";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const auth = getAuth()

export default Navigator = () => {
  const [usuarioGlobal, setUsuarioGlobal] = useState("");


  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase?.emailVerified) {
      if (usuarioFirebase.displayName) {
        //console.log("entre a if")
        setUsuarioGlobal(usuarioFirebase.displayName);
      } else {
        //console.log("entre a else")
        const trimmedName = usuarioFirebase.email.split("@")[0];
        setUsuarioGlobal(trimmedName);
      }
    } else {
      //console.log("entre a else else")
      setUsuarioGlobal("");
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"RestoBook"}
          component={Home}
          options={({ navigation }) => ({
            headerTitle: () => (
              <NavHome navigation={navigation} title={"Resto Book"} />
            ),
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
          })}
        />
        <Stack.Screen
          name="RegisterUser"
          component={AddUserScreen} />
        <Stack.Screen
          name="RegisterResto"
          component={RegisterResto}
          options={{
            headerTitle: "Register Resto",
            title: "Register Resto",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="AddMenuResto"
          component={AddMenuResto}
          options={{
            headerTitle: "Agregar Menu",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />

        <Stack.Screen
          name="DetailsResto"
          component={DetailsResto}
          options={({ navigation }) => ({
            headerTitle: () => <NavDetail navigation={navigation} />,
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
          })}
        />

        {/* Mercado Pago */}
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{
            headerTitle: "Pague Su Reserva",
            title: "WebViewScreen",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        {/* //============// */}
        <Stack.Screen
          name="ListReviews"
          component={ListReviews}
          options={{
            headerTitle: "ListReviews",
            title: "ListReviews",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
          />
           <Stack.Screen
          name="AddReviewsRestorant"
          component={AddReviewsRestorant}
          options={{
            headerTitle: "AddReviewsRestorant",
            title: "AddReviewsRestorant",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
          />
        <Stack.Screen
          name="GlobalLogin"
          component={GlobalLogin}
          options={{
            headerTitle: "",
            title: "Resto Book",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />

        <Stack.Screen
          name="AwaitEmail"
          component={AwaitEmail}
          options={{
            headerTitle: "Verify Email",
            title: "Verify Email",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="ProfileUser"
          component={ProfileUser}

          options={({ navigation }) => ({
            headerTitle: " Mi Perfil",
            title: 'Profile',

            headerTitleAlign: "center",
            headerRight: () => (
              <Btn
                nombre={
                  usuarioGlobal !== ""
                    ? `Create your resto, ${usuarioGlobal}!`
                    : `Crea tu resto!`
                }
                ruta="RegisterResto"
                navigation={navigation}
              />
            ),
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },


          })}

        />
        <Stack.Screen
          name="ProfileResto"
          component={ProfileResto}
          options={{

            headerTitle: " Mi Empresa",
            title: 'Profile',

            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f6efd2",
            },
            headerTintColor: "#392c28",
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
