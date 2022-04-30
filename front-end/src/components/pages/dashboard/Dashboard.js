import styles from './Dashboard.module.css';

const Dashboard = () => {
    return(
        <section className={styles.container_dashboard}>
            <h1 className={styles.title}>Dashoard</h1>
           <div className={styles.box_dashboard}>
                <div className={styles.title_dashboard}>
                    <p>ICON</p>
                    <div className={styles.box_title}>
                        <h3>Seu patrimÕnio em 30 anos será:</h3>
                    </div>
                    
                </div>
                <span className={styles.price}>R$ 13.00,00</span>
           </div>
           <div className={styles.box_dashboard}>
                <div className={styles.title_dashboard}> 
                    <p>ICON</p>
                    <div className={styles.box_title}>
                        <h3>Alcançara R$ 1 Milhão em:</h3>
                        {/* <small style={styles.samll_text}>Teste</small> */}
                    </div>
                   
                </div>
                <span className={styles.price}>R$ 13.00,00</span>
           </div>
           <div className={styles.box_dashboard}>
                <div className={styles.title_dashboard}>
                    <p>ICON</p>
                    <div className={styles.box_title}>
                        <h3>Capital Inicial + Aportes:</h3>
                        <small style={styles.samll_text}>Teste</small>
                    </div>
                   
                </div>
                <span className={styles.price}>R$ 13.00,00</span>
           </div>
           <div className={styles.box_dashboard}>
                <div className={styles.title_dashboard}>
                    <p>ICON</p>
                    <div className={styles.box_title}>
                        <h3>Valor Ganho em Juros:</h3>
                        <small style={styles.samll_text}>Teste</small>
                    </div>
                   
                </div>
                <span className={styles.price}>R$ 13.00,00</span>
           </div>
           <div className={styles.box_dashboard_renda}>
                <div className={styles.title_dashboard}>
                    <p>ICON</p>
                    <div className={styles.box_title_renda}>
                        <h3 className={styles.title_renda}>Renda Passiva Mensal:</h3>
                        <small className={styles.small_text_renda}>Aproximado</small>
                    </div>
                   
                </div>
                <span className={styles.price_renda}>R$ 13.00,00</span>
           </div>
        </section>
    );
}

export default Dashboard;