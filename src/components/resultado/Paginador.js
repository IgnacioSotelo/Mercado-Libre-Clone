import React from "react";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Paginador({ nombre, pagina, cantidad }) {
  let history = useHistory();

  const handlePageClick = (e) => {
    history.push("/resultados/" + nombre + "/" + Number(e.selected + 1));
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <div className="paginador">
      <ReactPaginate
        initialPage={pagina - 1}
        previousLabel={"❮ Anterior"}
        nextLabel={"Siguiente ❯"}
        marginPagesDisplayed={0}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        disabledClassName={"disable-pag"}
        pageCount={cantidad / 10}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default Paginador;
