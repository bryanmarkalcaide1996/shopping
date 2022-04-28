import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign } from "@fortawesome/free-solid-svg-icons";
import { useFilterContext } from "../context/filter_context";

function Sort() {
  const { updateFilter } = useFilterContext();
  return (
    <form>
      <Wrapper>
        <FontAwesomeIcon icon={faPesoSign} />
        <select
          name="price"
          id="sort"
          onChange={(e) => {
            const { name, value } = e.target;
            updateFilter(name, value);
          }}
        >
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </Wrapper>
    </form>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 5px;
  * {
    padding: 3px;
  }
  select {
    margin-left: 5px;
    width: 100%;
  }
`;

export default Sort;
