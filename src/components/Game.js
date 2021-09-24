import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";
import { Link } from "react-router-dom";
import { smallImage } from "../Util";
import { popUp } from "../animation";

const Game = ({ name, released, id, image }) => {
  const stringToPath = id.toString();
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringToPath}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h2 layoutId={`title ${stringToPath}`}>{name}</motion.h2>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringToPath}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
