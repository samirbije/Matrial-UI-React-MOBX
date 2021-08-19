import axios from "axios";
import { types, applySnapshot, Instance } from "mobx-state-tree"
import { API_ROOT } from "./item";

const Category = types.model({
  id: "",
  name: ""
})

export const CategoryList = types.model({
  categoryList: types.optional(types.array(Category), [])
}).actions(self => ({
  async fetchCategoyList() {
    axios.get(`${API_ROOT}/categories`)
      .then((response) => {
        applySnapshot(self, {
          categoryList: response.data.data
        })
      })
  }
}))

export type ICategory = Instance<typeof Category>
export type ICategoryList = Instance<typeof CategoryList>;


