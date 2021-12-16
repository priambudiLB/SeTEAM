<<<<<<< HEAD
import classes from "./Card.module.css";

function CardFrame(props) {

    return (
        <>
        <div className={classes.card}>
            {props.children}
        </div>
        </>
    )
=======
import classes from './Card.module.css';

function CardFrame(props) {

  return (
    <>
      <div className={classes.card}>
        {props.children}
      </div>
    </>
  );
>>>>>>> 7730ccf16bc781fa12463d6ca762eb883c9797b2
}

export default CardFrame;