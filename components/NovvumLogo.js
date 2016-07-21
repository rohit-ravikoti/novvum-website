import React from 'react';
import { prefixLink } from 'gatsby-helpers';

const NovvumLogo = (props) => {
  const { src, style } = props;
  let mergedStyles = Object.assign({
    maxWidth: '80px',
    maxHeight: '80px',
  });

  return (
    <img 
      src={ prefixLink(src) } 
      alt="Novvum Logo"
      style={ mergedStyles }
      className="logo"
    />
  );
};

NovvumLogo.propTypes = {
  src: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

export default NovvumLogo;
