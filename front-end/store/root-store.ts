import { makeObservable, observable, action, computed } from "mobx"

import { CategoryList } from './model/category'
import { ItemList } from './model/item'


const RootStore = {
    categories: CategoryList.create(),
    items: ItemList.create(),
}

export default RootStore;