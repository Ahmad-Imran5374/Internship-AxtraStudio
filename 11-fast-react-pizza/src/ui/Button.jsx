import React from 'react'
import { Link } from 'react-router-dom';

function Button({children,disabled,to,type,onClick}) {

  const base = "bg-yellow-400 text-sm uppercase font-semibold text-stone-800  tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed inline-block";

  const styles = {
    primary: base + ' px-4 py-3 md:px-5 md:py-4',
    small : base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary: " uppercase font-semibold text-sm border-2 border-stone-300 text-stone-400  tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 hover:text-stone-800 focus:outline-none focus:ring focus:bg-stone-300 focus:ring-stone-200 focus:ring-offset-2 hover:text-stone-800 disabled:cursor-not-allowed inline-block px-4 py-2.5 md:px-5 md:py-3.5"
  }

  if(to){
    return<Link to={to} className={styles[type]}>{children}</Link>
  };

  if(onClick){
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    )
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
