import React from "react";
import Profile from "./Profile/Profile";
import {data} from "./data.js"
import PropTypes from "prop-types";

function App() {
  Profile.propTypes = {
    bio:PropTypes.string
   };
 const Name=()=>{
 alert(data.fullName) }
  
  return (
    <div>
      <Profile {...data} Name={Name}/>
      <Profile />
    </div>
  );
}
Profile.defaultProps = {
  fullName: "Sallem Ghouil",
    bio: "Je suis actuellement ingénieur génie logiciel et systèmes d'information. Ayant acquis une expérience respectable dans le développement d'applications Web grâce à l'utilisation des technologies les plus récentes et innovantes",
    profession: "Ingénieur informatique",
};
export default App;
