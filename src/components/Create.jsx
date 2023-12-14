import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import "./Edit.css"


export const Create = () => {
    const [nombre, setNombre] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [instrucciones, setInstrucciones] = useState("");
    const [categoria, setCategoria] = useState("");
  
    const navigate = useNavigate();
  
    const tragosCollection = collection(db, "tragos");
  
    const createTrago = async (e) => {
      e.preventDefault();
      await addDoc(tragosCollection, {
        nombre: nombre,
        ingredientes: ingredientes,
        instrucciones: instrucciones,
        categoria: categoria,
      });
      navigate("/show");
    };
  
    return (
      <div className="edit_container">
        <div className="row">
          <div className="col">
            <h1>CREAR TRAGO</h1>
            <form onSubmit={createTrago}>
              <div className="mb-3">
                <label className="form-label">NOMBRE</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">INGREDIENTES</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setIngredientes(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">INSTRUCCIONES</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setInstrucciones(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">CATEGORIA</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </div>
  
              <div className="btn-edit-create">
                <button type="submit" className="btn btn-secondary">
                  ACEPTAR
                </button>
                <Link to="/show" className="btn btn-danger">
                  CANCELAR
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };