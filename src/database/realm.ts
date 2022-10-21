import Realm from 'realm'
import { UserProfile, UserCategories, UserAccounts } from './Schemas/UserProfileSchema'
import { Expenses } from './Schemas/ExpensesSchema'
import { Category } from './Schemas/CategorySchema'

import { Schemas } from './Schemas/Schemas'

export const getRealm = async () => await Realm.open({
    path: 'ihGastei-app',
    schema:  [UserProfile, UserCategories, UserAccounts, Expenses, Category],
    schemaVersion: 4
})

