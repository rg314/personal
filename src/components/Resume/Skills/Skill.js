import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>{data.level}</h4>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Skill.propTypes = {
  data: PropTypes.shape({
    level: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Skill;
