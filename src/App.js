import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Catalogo from "./paginas/Catalogo"

library.add(fab, fas);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catalogo/:id" element={<Catalogo />}></Route>
      </Routes>
    </Router>
  )
}