import classes from "./Intro.module.css";

const Circle = ({ top, left, bottom, right, backgroundColor }) => {
  return (
    <div
      style={{ top, left, bottom, right, backgroundColor }}
      className={classes.circle}
    />
  );
};

export default Circle;
