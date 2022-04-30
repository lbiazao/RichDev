import styles from './Painel.module.css'
import CurrencyInput from 'react-currency-input'

const Painel = () => {

    function handleChange(e){

    }

    function handleSubmit(e){

    }

    return(
        <section>
            <h1></h1>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="e">Form 1</label>
                    <input 
                        type="number"
                        className=''
                        min={0}
                        name='years'
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label htmlFor="e">Form 2</label>
                    <input 
                        type="number"
                        className=''
                        min={0}
                        name='diner'
                       
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <label htmlFor="e">Form 3</label>
                    <CurrencyInput 
                        className=''
                        name='teste'
                        decimalSeparator=","
                        thousandSeparator="."
                        precision="2"
                        onChange={handleChange}
                    />
                </div>
                
            </form>
            </div>
           
        </section>
    );
}
export default Painel;