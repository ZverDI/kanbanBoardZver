import css from './footer.module.scss'
function Footer() {

 return (
   <footer className={css.footer}>
     <div className={css.footer__row}>
       <div className={css.footer__state}>
         <p>Active tasks:</p>
         <p>Finished tasks:</p>
       </div>
       <div>
         <p>Kanban board by Siesta, 2023</p>
       </div>
     </div>
   </footer>
  );
}

export default Footer;