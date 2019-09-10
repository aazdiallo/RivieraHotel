import React from 'react'

export default function Hero({children, Hero}) {
  return (<header className={Hero}>{children}</header>
  );
}

Hero.defaultProps = {
  Hero: 'defaultHero'
};