import Star from "../../assets/star.svg";
import Greystar from "../../assets/greystar.svg";

function Rating({ scaleValue, ratingType }) {
  const range = [1, 2, 3, 4, 5];

  const scaleType =
    ratingType === "Active" ? (
      <img src={Star} alt="sun-icon" />
    ) : (
      <img src={Greystar} alt="water-icon" />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default Rating;
