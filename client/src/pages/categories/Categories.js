import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchCategoriesStart } from "../../redux/categories/actions";
import {
  selectIsCategoriesFetching,
  selectCategoriesItems,
} from "../../redux/categories/selectors";

import Spinner from "../../components/layout/Spinner";

const Categories = ({ isLoading, categories, fetchCategoriesStart }) => {
  useEffect(() => {
    fetchCategoriesStart();
  }, [fetchCategoriesStart]);

  return (
    <div className="container">
      {categories.length ? (
        <div>
          <h4>Categories</h4>
          {isLoading && <Spinner />}
          {categories &&
            categories.map((item) => {
              return (
                <Link to={`/categories/${item.id}`} key={item.id}>
                  <div
                    className="Categories"
                    style={{
                      backgroundImage: `url(${item.icons[0].url})`,
                    }}
                  >
                    <h5>{item.name}</h5>
                  </div>
                </Link>
              );
            })}
        </div>
      ) : (
        <button
          onClick={() => (window.location = "http://localhost:8888/login")}
          style={{ padding: "20px", fontSize: "50px", marginTop: "20px" }}
        >
          Sign in with Soptify
        </button>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCategoriesFetching,
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
