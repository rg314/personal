import React from 'react';
import PropTypes from 'prop-types';

import Skill from './Skills/Skill';

const Skills = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Skills</h3>
    </div>
    {data.map((skill) => (
      <Skill
        data={skill}
        key={skill.level}
      />
    ))}
  </div>
);

Skills.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    level: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Skills.defaultProps = {
  data: [],
};

export default Skills;
