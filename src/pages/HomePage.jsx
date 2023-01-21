const OPERATION_TYPES = {
    INCOME: "income",
    EXPENCE: "expence"
};

const OPERATIONS = [
    {
        id: 1,
        category: "products",
        value: 3000,
        type: "expence",
        date: new Date()
    },
    {
        id: 2,
        category: "salsary",
        value: 50315,
        type: "income",
        date: new Date()
    },
    {
        id: 3,
        category: "car",
        value: 20000,
        type: "expence",
        date: new Date()
    }
];

// Форматирование чисел
const formatNumber = (value) => {
    return Intl.NumberFormat('ru-RU').format(parseInt(value));
}

// Функция форматирования для денег
const formatMoney = (value) => {
    return `${formatNumber(value)}`;
}

const HomePage = () => {
    return (
        <section>

            <div className="container">
                <div className="balance">
                    <h2>
                        {formatMoney(50275)}
                    </h2>
                </div>

                <div className="balance-form">
                    <form>
                        <h3>Добавить операцию</h3>

                        <div className="wrapper">
                            <input type="text" name="balance" placeholder="30 000"/>

                            <select name="category">
                                <option value="products">Продукты</option>
                            </select>

                            <button className="button button--remove">Добавить операцию</button>
                        </div>
                    </form>
                </div>

                <div className="operations__wrapper">
                    <h2 className="operation__title">
                        Операции
                    </h2>

                    <div className="filter">
                        <button className="button sm">Все опреации</button>
                        <button className="button sm green">Все доходы</button>
                        <button className="button sm red">Все расходы</button>
                    </div>

                    <div className="operations">
                        {
                            OPERATIONS.map((operation) => {
                                return (
                                    <div key={operation.id} className="operation">
                                        <div className={`circle ${operation.type === OPERATION_TYPES.INCOME ? "income" : "expense"}`}>
                                            {
                                                operation.type === OPERATION_TYPES.INCOME ?
                                                <i class="fa-solid fa-money-bill"></i>
                                                :
                                                <i class="fa-solid fa-shop"></i>

                                            }
                                        </div>
                                        <p className="total">{formatMoney(operation.value)} руб.</p>
                                        <p className="category">Категория: {operation.category}</p>
                                        <button className="button button--remove">Удалить</button>
                                    </div>
                                );
                            })
                        }
                        

                        <div className="pagination">
                            <button className="pagination__button">
                                1
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomePage;