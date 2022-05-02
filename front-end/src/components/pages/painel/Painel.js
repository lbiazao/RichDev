import styles from './Painel.module.css'
import CurrencyInput from 'react-currency-input'
import { useState } from 'react';

const Painel = () => {

    const [years,setYears] = useState({})
    const [investiments,setInvestiments] = useState({})
    const [taxa,setTaxa] = useState({})

    function handleChange(e){
        setInvestiments({...investiments, [e.target.name]: e.target.value})
        console.log(investiments)
    }
    // function handleTeste(e){
    //    var teste = e.target.value
    //     console.log( teste)
    // }
    function handleTeste(e,maskedValue, value){
       //let teste = setTaxa(console.log({...taxa, [e.target.name]: value}))

       var teste = {
            taxas:maskedValue,
            investimentos:maskedValue
       }
       //console.log(taxa)
        //console.log(teste)
    }
    
    

    function handleSubmit(e){
        //e.preventDefault()
      
    }

    return(
       <section className={styles.container_form}>
            <h1 className={styles.title_form}>Painel de controle</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="e" className={styles.label_form}>1. Com quantos anos quero minha liberdade</label>
                        <input 
                            type="number"
                            className={styles.form_control}
                            min={0}
                            name='years'
                            onChange={handleChange}

                        />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="e" className={styles.label_form}>2. Investimento mensal</label>
                        <CurrencyInput 
                            className={styles.form_control}
                            name='investimento'
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="2"
                            onChangeEvent={handleTeste}
                        />
                       
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="e" className={styles.label_form}>3. Taxa de retorno atual</label>
                        <CurrencyInput 
                            className={styles.form_control}
                            name='taxa'
                            decimalSeparator=","
                            thousandSeparator="."
                            precision="2"
                            onChangeEvent={handleTeste}
                        />
                        {/* <input 
                            type="number"
                            className={styles.form_control}
                            min={0}
                            name='taxa'
                            onChange={handleChange }
                        /> */}
                    </div>
                    <button className={styles.button_calcular}>Calcular</button>
                  
                </form>
            </div>
           
        </section>
       
        
    );
}
export default Painel;