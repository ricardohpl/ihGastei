export declare global {
    namespace Expenses {
        type ExpenseType = {
            userId: string,
            amount: number,
            payment: int,
            category: int,
            installments: int,
            date: date,
            lastChange: date
        }
    }
}