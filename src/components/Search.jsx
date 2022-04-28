import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <Wrapper>
      <input type="text" name="search" value="123" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 5px;
  * {
    padding: 3px;
  }
  input {
    width: 100%;
  }
`;
export default Search;
