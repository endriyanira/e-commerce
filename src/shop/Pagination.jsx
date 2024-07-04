import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      {activePage > 1 && (
        <li>
          <a
            href="#"
            onClick={() => {
              if (activePage > 1) {
                paginate(activePage - 1);
              }
            }}
          >
            <i className="icofont-rounded-left"></i>
          </a>
        </li>
      )}
      {pageNumbers.map((page) => (
        <li
          key={`paginationKey-${page}`}
          className={`page-item ${page === activePage && "bg-warning"}`}
        >
          <button onClick={() => paginate(page)} className="bg-transparent">
            {page}
          </button>
        </li>
      ))}
      {activePage < pageNumbers.length && (
        <li>
          <a
            href="#"
            onClick={() => {
              if (activePage < pageNumbers.length) {
                paginate(activePage + 1);
              }
            }}
          >
            <i className="icofont-rounded-right"></i>
          </a>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
