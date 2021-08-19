
import axios from "axios";
import { types, applySnapshot, Instance } from "mobx-state-tree"

export const API_ROOT = 'http://localhost:5000';

const Item = types.model({
  id: "",
  name: "",
  description: "",
  like_count: 0,
  comment_count: 0,
  price: 0,
  is_sold_out: false,
  shipping_fee: "",
  image: "",
  category_id: 1
})

export const ItemList = types.model({
  itemList: types.optional(types.array(Item), [])
}).actions(self => ({
  async fetchItemList() {
    axios.get(`${API_ROOT}/items`)
      .then((response) => {
        applySnapshot(self, {
          itemList: response.data.data
        })
      })
  }
})).views(self => ({
  activeCategoryItem(categoryId: Number) {
    return self.itemList.filter(item => item.category_id === categoryId);
  }
}))

export type IItem = Instance<typeof Item>
export type IItemList = Instance<typeof ItemList>


