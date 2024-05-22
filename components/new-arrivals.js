import styles from "./new-arrivals.module.css";
import PropTypes from 'prop-types';


const NewArrivals = ({ className = "" }) => {
  return (
    <div className={[styles.newArrivals, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-20@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.hoodiesSweetshirtParent}>
              <div
                className={styles.hoodiesSweetshirt}
              >{`Hoodies & Sweetshirt`}</div>
              <div className={styles.exploreNow}>Explore Now!</div>
            </div>
            <img className={styles.frameItem} alt="" src="/arrow-1.svg" />
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-21@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.hoodiesSweetshirtParent}>
              <div className={styles.coatsParkas}>{`Coats & Parkas`}</div>
              <div className={styles.exploreNow1}>Explore Now!</div>
            </div>
            <img className={styles.frameItem} alt="" src="/arrow-2.svg" />
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-22@2x.png"
          />
          <div className={styles.frameDiv}>
            <div className={styles.hoodiesSweetshirtParent}>
              <div className={styles.teesTShirt}>{`Tees & T-Shirt`}</div>
              <div className={styles.exploreNow2}>Explore Now!</div>
            </div>
            <img className={styles.frameItem} alt="" src="/arrow-2.svg" />
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-8.svg" />
        <div className={styles.newArrivals1}>NEW ARRIVALS</div>
      </div>
    </div>
  );
};

NewArrivals.propTypes = {
  className: PropTypes.string,
};

export default NewArrivals;
