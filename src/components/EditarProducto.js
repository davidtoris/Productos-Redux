import React from "react";

function EditarProducto() {
  return (
    <div>
      <h2>Editar producto</h2>
      <form>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input type="number" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
}

export default EditarProducto;
