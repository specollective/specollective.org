import React, { useState, useEffect, useRef } from 'react';

const SpecIcon = ({ name, ...rest }) => {
  const [icon, setIcon] = React.useState()
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      const { default: src } = (await import(`../img/${name}.svg`))
      setIcon(src)
      setLoading(false)
    }
    importIcon();
  }, [name]);

  if (!loading && icon) {
    return <img src={icon} />
  }

  return null;
};

export default SpecIcon
