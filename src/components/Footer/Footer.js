import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.wrapper} >
            <div className={styles.footerGrid}>
                <section>
                    <h4 className={styles.head}>Something</h4>
                    <p>Our Service a</p>
                    <p>Our Service b</p>
                </section>

                <section>
                    <h4>Something</h4>
                    <p>Our Service a</p>
                    <p>Our Service b</p>
                </section>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer