import React from 'react'
import Properties from './Properties'
import Logo from './Logo'
import styles from './card.module.css'
const Card = (props) => {

  // console.log(props.data)
  return (

    props.data.map((el, index) => {
      return (
        <div className={styles.card} key={index} style = {{backgroundColor : el.color}}>
          <Properties detail={el} />
          <Logo image={el.logo} />
        </div>

      )
    })

  )
}

export default Card