import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  div {
    background: #fff;
    padding: 2rem 5rem;
    border-radius: 0.25rem;
    header {
      display:flex;
      align-items:center;
      justify-content: space-between;
    }
    
    strong {
      margin-top: 1rem;
      font-size:1.5rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
