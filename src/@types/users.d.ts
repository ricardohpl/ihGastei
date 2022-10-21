export declare global {
    namespace Users {
        type UserType = {
            _id: string;
            email: string;
            name: string;
            lastChange: Date;
        }

        type AccountType = {
            _id: string,
            userId: string,
            salary: number, // value of monthly salary 
            salaryDay: int, // day that user get his salary
            balance: number,
            name: string,
            lastChange: date
        }

    }
}
