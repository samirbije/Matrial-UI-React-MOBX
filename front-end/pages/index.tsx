import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from '@material-ui/core'
import Search from '../components/common/search'
import Category from '../components/category'
import GoTop from '../components/common/go-top'
import ItemInformation from '../components/item-info'
import { ICategoryList } from '../store/model/category'
import { IItemList } from '../store/model/item'
import CameraIconContainer from '../components/common/camera-icon-container'


export class Home extends Component<ItemListProps, State> {
  constructor(props: ItemListProps) {
    super(props);

    this.state = {
      activeCategoryId: 2,
      isCorrectLocation: false,
    }
  }

  async componentDidMount() {
    const { categories, items } = this.props;

    document.addEventListener('scroll', this.handleScroll);

    try {
      await categories.fetchCategoyList();
      await items.fetchItemList();
    } catch (error) {
      console.log('Error', error)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      isCorrectLocation: Number(document.documentElement.scrollTop) > 40
    })
  }

  handleChangeCategoryTab = (event: React.ChangeEvent, activeTabId: Number) => {
    this.setState({ activeCategoryId: activeTabId })
  }

  render() {
    const { categories, items } = this.props;
    const { activeCategoryId, isCorrectLocation } = this.state;
    const filteredItemList = items.activeCategoryItem(Number(activeCategoryId) + 1);

    return (
      <Container maxWidth='md'>
        <GoTop isCorrectLocation={isCorrectLocation} />
        <Search />
        <Category categoryList={categories.categoryList} activeCategoryId={activeCategoryId} onChangeCategoryTab={this.handleChangeCategoryTab} />
        <ItemInformation itemList={filteredItemList} />
        <CameraIconContainer />
      </Container>
    )
  }
}

interface State {
  activeCategoryId: Number;
  isCorrectLocation: boolean;
}

export interface ItemListProps {
  categories: ICategoryList;
  items: IItemList;
}


export default inject('categories', 'items')(observer(Home));


