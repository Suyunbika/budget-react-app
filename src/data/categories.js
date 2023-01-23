export const INCOME_CATEGORIES = {
    salary: "Зарплата",
    transfer: "Перевод",
    cashback: "Кэшбек"
};

export const EXPENSE_CATEGORIES = {
    products: "Продукты",
    car: "Автомобиль",
    services: "Комунальные услуги"
};

export const CATEGORIES = { 
    ...INCOME_CATEGORIES, 
    ...EXPENSE_CATEGORIES 
};