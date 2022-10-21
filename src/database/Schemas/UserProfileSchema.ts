
export const UserProfile = {
    name: 'Profile',
    properties: {
        _id: 'string',
        name: 'string',
        email: 'string',
        lastChange: 'date'
    },

    primaryKey: '_id',
}


export const UserAccounts = {
    name: 'Accounts',
    properties: {
        _id: 'string',
        userId: 'string',
        salary: 'float', // value of monthly salary 
        salaryDay: 'int', // day that user get his salary
        balance: 'float',
        name: 'string',
        lastChange: 'date'
    },

    primaryKey: '_id',
}


export const UserCategories = {
    name: 'UserCategories',
    properties: {
        _id: 'string',
        value: 'string',
        icon: 'string',
        lastChange: 'date'
    },

    primaryKey: '_id',
}
