import React, { useState } from "react";

const Buscador = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const filteredData = data.filter((item) =>
    item.place.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por lugar..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="contenedor">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Magnitud</th>
            <th>Lugar</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} onClick={() => handleItemClick(item)}>
              <td>{item.magnitude}</td>
              <td>{item.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <div className="card" style={{width: "40rem"}}>
        <div className="card-body">
          <h2 className="card-title">Detalles:</h2>
          <p className="card-text">Magnitud: {selectedItem.magnitude}</p>
          <p className="card-text">Fecha: {selectedItem.date}</p>
        <img src={selectedItem.image} className="card-img-top" alt={selectedItem.place} />
        </div>
      </div>
      )}
      </div>
    </div>
  );
};

export default Buscador;
