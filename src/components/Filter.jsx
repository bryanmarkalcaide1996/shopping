import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helper";
import Search from "./Search";
import Sort from "./Sort";

function Filter() {
  const { allItems, updateFilter } = useFilterContext();
  const categories = getUniqueValues(allItems);
  const [active, setActive] = useState(categories[0]);
  return (
    <Wrapper>
      <Search />
      {categories.map((item, idx) => {
        return (
          <div key={idx}>
            <p
              id={idx}
              className={`${item === active && "active"}`}
              onClick={(e) => {
                const { innerText: value, id } = e.target;
                const name = "category";
                updateFilter(name, value);
                setActive(categories[id]);
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
    padding: 5px 30px;
  }
  p:hover {
    transform: scale(1.01);
    background: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
    color: white;
  }
  .active {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
    color: white;
  }
`;

export default Filter;
