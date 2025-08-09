import css from './main.module.scss'
import Column from "../Column/column";

function Main() {



  return (
    <main className={css.main}>
      <div className={css.main__wrapper}>
        <Column title="Backlog" />
        <Column title="Ready" />
        <Column title="In Progress" />
        <Column title="Finished" />
      </div>

    </main>
  );
}

export default Main;