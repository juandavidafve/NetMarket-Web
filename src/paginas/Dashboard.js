import { auth } from '../firebase';
import { signOut } from "firebase/auth";

export default function Dashboard({ info }) {

    function handleLogout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            //navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <p>Wenas {info.nombre}. ID {info.id}. Email {info.correo}</p>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
    )
}