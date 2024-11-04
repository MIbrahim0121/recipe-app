import React from "react";

const Searchbar = ({ value, isLoading, handlesubmit, onChange }) => {
  return (
    
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search Recipes"
          disabled={isLoading}
          className="form_control"
          onChange={onChange}
        />
      <input
        type="submit"
        disabled={isLoading || !value}
        className="btn"
        value="search"
      />
      </form>
  );
};

export default Searchbar;
