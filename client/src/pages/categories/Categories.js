import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchCategoriesStart } from "../../redux/categories/actions";
import { selectCategoriesItems } from "../../redux/categories/selectors";

const Categories = ({ categories, fetchCategoriesStart }) => {
  useEffect(() => {
    fetchCategoriesStart();
  }, [fetchCategoriesStart]);

  return (
    <div>
      <h4>Categories</h4>
      <div>
        {categories &&
          categories.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/categories/${item.id}`}>
                  <div
                    style={{
                      backgroundImage: `${item.icons[0].url}`,
                      backgroundSize: "cover",
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <h5>{item.name}</h5>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesItems,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
