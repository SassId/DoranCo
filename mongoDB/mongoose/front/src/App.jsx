import { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Inscription from "./pages/inscription.jsx";
import Connexion from "./pages/connexion.jsx";
import Profile from "./pages/profile.jsx";

// * Creates a context to be able to send info from app directly to other component without having use the props cascade (import the info in every descending components)
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("access_token");
      if (!token) {
        return;
      }
      const response = await fetch("/api/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        return;
      }
      const { user } = await response.json();
      setUser(user);
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Accueil</Link>
          {
            // La condition est a changer plus tard
            !user ? (
              <>
                <Link to={"/inscription"}>Inscription</Link>
                <Link to={"/connexion"}>Connexion</Link>
              </>
            ) : (
              <Link to={"/profile"}>Profile</Link>
            )
          }
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;

// Créer un composant /components/TodoList.jsx
// Il y'aura un input et un bouton
// Quand on clique sur le bouton, afficher dans une alerte l'entrée de l'utilisateur
