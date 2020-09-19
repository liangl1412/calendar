import React from 'react';

const SVGIcon = ({icon, size}) => {
    const {viewBox, data} = icon;
    const styles = {
      width: size,
      height: size
    }
    return (
      <svg style={styles} viewBox={viewBox}>{data}</svg>
    )
}

export default SVGIcon;
