import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { UserContext } from "../_layout";
import { Redirect, Link } from "expo-router";

export default function profile() {
  const user = useContext(UserContext);
  console.log(user);

  // Not working
  // if (user === null) {
  //   return <Redirect href={"/authentification"}></Redirect>
  // }

  return (
    <View style={{ ...userCard.container, ...userCard.shadow }}>
      <Text style={userCard.welcome}>Welcome</Text>
      <Text style={userCard.userEmail}>{user.user.email}</Text>
      <Link href={"/profile/camera"}>Camera</Link>
    </View>
  );
}

const userCard = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    marginHorizontal: "auto",
    marginVertical: 50,
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "red",
  },
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  welcome: {
    color: "red",
    fontSize: 50,
    // textAlign: "center",
  },
  userEmail: {
    color: "orange",
  },
});

// TODO:
// Exercice:
// Créer une dossier profile:
// 1. Ajouter Layout en mode Stack
// 2. Fichier index.jsx: Utiliser le contexte pour afficher l'email de l'utilisateur
// 3. Chercher dans la documentation comment rediriger l'utilisateur.
// 4. Rediriger l'utilisateur vers la page de profile après la connexion
