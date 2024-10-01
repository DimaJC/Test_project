import React,  {useState} from "react";

const TransactionForm = ({ addTransaction}) => {
    const [amount, setAmount] = useState ('');
    const [type, setType] = useState ('income');
    const [category, setCategory] = useState ('Зарплата');
    const [date, setDate] = useState ('');

    const hadleSubmit = (event) => {
        event.preventDefault();
        const newTracsation = {
            id: Date.now(),
            amout: parseFloat(amout),
            type,
            category,
            date
        };
        addTransaction(newTracsation);
        setAmount('');
        setCategory('Зарплата');
        setDate('');
    };
    return (
        <div>
                    <form className="transaction-form" onSubmit={hadleSubmit}>
            <h3 className="transaction-form__title">Добавить транзакцию</h3>

            <div className="transaction-form__group">
                <label className="transaction-form__label">Сумма:</label>
                <input 
                type="number"
                value={amount} 
                onChange={(event) => setAmout (event.target.value)}
                className="transaction-form__input"
                required
                />
            </div>
            <div className="transaction-form__group">
                <label className="transaction-form__label">Тип:</label>
                <select 
                 value={type}
                 onChange={(event) => setType (event.target.value)}
                 className="transaction-form__select"
                >
                    <option value="income">Доход</option>
                    <option value="income">Расход</option>
                </select>
            </div>
            <div className="Transaction-form__group">
                <label className="transaction-form__label">Категория:</label>
                <select
                value={category} 
                onChange={(event) => setCategory(event.target.value)}
                className="transaction-form__select"
                >

                </select>
            </div>
        </form>
        </div>
    )
}