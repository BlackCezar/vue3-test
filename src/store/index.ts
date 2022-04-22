import { createStore } from 'vuex'

import {Company} from '../models/Company'
import {Ticket} from '../models/Ticket'

export interface State {
    tickets: Ticket[],
    companies: Company[],
    filters: object,
}

export const store = createStore<State>({
    state: {
        tickets: [],
        companies: [],
        filters: {}
    }
})