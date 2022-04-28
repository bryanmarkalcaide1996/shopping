import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helper";
import Search from "./Search";
import Sort from "./Sort";

function Filter() {
  const { allItems, updateFilter } = useFilterContext();
  const categories = getUniqueValues(allItems);
  return (
    <Wrapper>
      <Search />
      {categories.map((item, idx) => {
        return (
          <div key={idx}>
            <p
              onClick={(e) => {
                const { innerText: name } = e.target;
                updateFilter(name);
              }}
            >
              {item}
            </p>
          </div>
        );
      })}
      <Sort />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  p {
    cursor: pointer;
    margin: 5px;
  }
`;

export default Filter;
