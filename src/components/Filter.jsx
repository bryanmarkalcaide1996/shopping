import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helper";

function Filter() {
  const { allItems, updateFilter } = useFilterContext();

  const categories = getUniqueValues(allItems);
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
`;

export default Filter;
