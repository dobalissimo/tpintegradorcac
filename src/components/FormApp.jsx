import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { edadValidator } from "../../utils/validator";
import Swal from 'sweetalert2'
import "../components/FormApp.css"


export const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

    Swal.fire({
        title: data.nombre,
        color: "white",
        text: "Subscription OK",
        icon: 'success',
        confirmButtonText: 'Listo',
        background: "#36354a",
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/');
        }
    });
        

    }

    const incluirTelefono = watch('incluirTelefono');

    return (
        
        <div className="containerForm">
    <h2>Suscribite para recibir novedades</h2>
   
    <form className="mi-formulario  justify-content-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="" {...register('nombre', { required: true, maxLength: 10 })} />
            {errors.nombre?.type === 'required' && <small className="text-danger">El campo nombre es requerido</small>}
            {errors.nombre?.type === 'maxLength' && <small className="text-danger">El campo nombre debe tener menos de 10 caracteres</small>}
        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="" className="form-control" id="email" {...register('email', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
            {errors.email?.type === 'pattern' && <small className="text-danger">El formato del email es incorrecto</small>}
        </div>

        <div className="form-group">
            <label htmlFor="edad">Edad</label>
            <input type="text" placeholder="" className="form-control" id="edad" {...register('edad', { validate: edadValidator })} />
            {errors.edad && <small className="text-danger">La edad debe estar entre 18 y 65</small>}
        </div>

        <div className="form-group">
            <div className="form-check">
                <input type="checkbox"  className="form-check-input" id="incluirTelefono" {...register('incluirTelefono')} />
                <label className="form-check-label" htmlFor="incluirTelefono">¿Incluir teléfono?</label>
            </div>
        </div>

        {incluirTelefono && (
            <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" placeholder="" className="form-control" id="telefono" {...register('telefono')} />
            </div>
        )}

        <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
</div>

)
}