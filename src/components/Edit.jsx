import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import "./Edit.css";

export const Edit = () => {
    const [nombre, setNombre] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [instrucciones, setInstrucciones] = useState("");
    const [categoria, setCategoria] = useState("");
  
    const navigate = useNavigate();
  
    const { id } = useParams();
  
    const update = async (e) => {
      e.preventDefault();
      const tragoDoc = doc(db, "tragos", id);
  
      const data = {
        nombre: nombre,
        ingredientes: ingredientes,
        instrucciones: instrucciones,
        categoria: categoria,
      };
  
      await updateDoc(tragoDoc, data);
      navigate("/show");
    };
  
    const getTragosById = async (id) => {
      const tragoDoc = await getDoc(doc(db, "tragos", id));
  
      if (tragoDoc.exists()) {
        setNombre(tragoDoc.data().nombre);
        setIngredientes(tragoDoc.data().ingredientes);
        setInstrucciones(tragoDoc.data().instrucciones);
        setCategoria(tragoDoc.data().categoria);
      } else {
        console.log("No existe el dato");
      }
    };
  
    // Use Effect
    useEffect(() => {
      getTragosById(id);
    }, [id]);
  
    return (
      <div className="edit_container">
        <div className="row">
          <div className="col">
            <h1>EDITAR TRAGO</h1>
            <form onSubmit={update}>
              <div className="mb-3">
                <label className="form-label">NOMBRE</label>
                <input
                  className="form-control"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">INGREDIENTES</label>
                <input
                  className="form-control"
                  type="text"
                  value={ingredientes}
                  onChange={(e) => setIngredientes(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">INSTRUCCIONES</label>
                <input
                  className="form-control"
                  type="text"
                  value={instrucciones}
                  onChange={(e) => setInstrucciones(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">CATEGORIA</label>
                <input
                  className="form-control"
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </div>
  
              <div className="btn-edit-create">
                <button type="submit" className="btn btn-secondary">
                  EDITAR
                </button>
                <Link to={"/show"} className="btn btn-danger">
                  CANCELAR
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };