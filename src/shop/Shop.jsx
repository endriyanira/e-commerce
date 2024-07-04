import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import ProductData from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(ProductData);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // change current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filter product based on category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(ProductData.map((val) => val.category))];

  const filterItemByCategory = (currentCategory) => {
    if (currentCategory === "All") {
      setProducts(ProductData);
    } else {
      const newItems = ProductData.filter(
        (product) => product.category === currentCategory
      );
      setProducts(newItems);
    }
    setSelectedCategory(currentCategory);
    // reset currentPage back to 1 because we already change the category
    setCurrentPage(1);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" currPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{`Showing ${
                    indexOfFirstProduct + 1
                  } - ${indexOfLastProduct} of 139 Results`}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* product cards */}
                <div className="">
                  <ProductCards
                    gridList={gridList}
                    products={currentProducts}
                  />
                </div>

                {/* Pagination */}
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory
                  filterItems={filterItemByCategory}
                  menuItems={menuItems}
                  selectedCategory={selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
