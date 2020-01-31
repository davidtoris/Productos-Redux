import React from "react";

function NuevoProducto() {
  return (
    <div>
      <h2>Nuevo producto</h2>
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
          Agregar
        </button>
      </form>
    </div>
  );
}

export default NuevoProducto;
