import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFilterContext } from "../context/filter_context";

function Search() {
  const {
    updateFilter,
    filter: { search },
  } = useFilterContext();
  return (
    <Wrapper>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => {
          const { name, value } = e.target;
          updateFilter(name, value);
        }}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 5px;
  display: flex;
  margin: 5px;
  overflow: hidden;
  * {
    padding: 5px;
  }
  input {
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;
export default Search;
