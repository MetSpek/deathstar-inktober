import styled from "styled-components";

const Example = styled.p`
  font-size: var(--fs-heading-1);
`;

function Content() {
    return (
        <>
          <Example>Example Text</Example>
        </>
    );
  }
  
  export default Content;