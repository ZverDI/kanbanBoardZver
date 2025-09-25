import css from './footer.module.scss'
function Footer({ activeCount, finishedCount }) {

 return (
   <footer className={css.footer}>
     <div className={css.footer__row}>
       <div className={css.footer__state}>
         <p>Active tasks: {activeCount}</p>
         <p>Finished tasks: {finishedCount}</p>
       </div>
       <div>
         <p>Kanban board Zver, 2025</p>
       </div>
     </div>
   </footer>
  );
}

export default Footer;