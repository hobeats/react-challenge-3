import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
  hover: { scale: 1.5, rotateZ: -90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgba(155, 89, 182,1.0)",
    transition:{
      duration:10
    }
   }
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVar}
        whileDrag="drag"
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default App;
