import DropMenu from "./dropmenu/dropmenu";
import css from './header.module.scss'

function Header() {

  return (
    <header className={css.header}>

      <div className={css.header__wrapper}>
        <a href="/" className={css.header__logo}>
          Awesome Kanban Board6j67j7667j6767j
        </a>

        <DropMenu />
      </div>


    </header>
  );
}

export default Header;