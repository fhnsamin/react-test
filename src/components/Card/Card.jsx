import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ card }) => {
  const { name, occupation, hobbies, working_company, img_link } = card;
  return (
    <div className="items-center gap-6 rounded-lg border p-4 md:flex">
      <div>
        <img src={img_link} className="w-full rounded-xl" />
      </div>
      <div className="flex-grow rounded-lg border p-6">
        <ul className="list">
          <li>Name : {name}</li>
          <li>Occupation : {occupation}</li>
          <li>Working Company : {working_company} </li>
          <li>Hobbies : {hobbies.join(", ")}.</li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
