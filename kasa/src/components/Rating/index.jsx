import styled from "styled-components";
import Star from "../../assets/star.svg";
import Greystar from "../../assets/greystar.svg";

const Stars = styled.img`
  height: 30px;
  @media only screen and (max-width: 500px) {
    height: 15px;
  }
`;

function Rating({ scaleValue, ratingType }) {
  const range = [1, 2, 3, 4, 5];

  const scaleType =
    ratingType === "Active" ? (
      <Stars src={Star} alt="sun-icon" />
    ) : (
      <Stars src={Greystar} alt="water-icon" />
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
