import React from 'react';
import css from './dropmenu.module.scss'
import avatar from '../icon/avatar.svg'
import arrow from '../icon/arrow.svg';


function DropMenu() {
  // Это создает переменную menuState, которая изначально равна false, и функцию setMenuState, которую можно использовать для изменения значения menuState.
  const [menuState, setMenuState] = React.useState(false)

    // это объявление функции clickMenu, которая меняет состояние menuState на противоположное.
  const clickMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <div className={css.dropmenu}>
      <div className={css.dropmenu__link} onClick={clickMenu} data-test="">
        <img className={css.dropmenu__avatar} src={avatar} alt="" />
        <img className={`${css.dropmenu__arrow} ${menuState ? css['dropmenu__arrow--active'] : ''}`} src={arrow} alt=""/>
      </div>
      <div className={`${css.dropmenu__sublinks} ${menuState ? css['dropmenu__sublinks--active'] : ''}`}>
        <span className={css['dropmenu__sublinks-item']}>Profile</span>
        <span className={css['dropmenu__sublinks-item']}>Log out</span>
      </div>
    </div>
  );
}

export default DropMenu;