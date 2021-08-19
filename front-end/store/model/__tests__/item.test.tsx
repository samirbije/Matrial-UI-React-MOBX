import { ItemList } from '../item'

describe('ItemList model', () => {
    it('should create successfully', () => {
        const itemListModel = ItemList.create({})
        expect(itemListModel.itemList.length).toBe(0)
    })
})