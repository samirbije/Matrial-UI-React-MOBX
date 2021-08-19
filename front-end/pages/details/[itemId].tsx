import React, { Component } from 'react';
import axios from "axios";
import { API_ROOT } from '../../store/model/item';
import ItemDetail from '../../components/item-detail'
import { useRouter } from 'next/router'


export default function ItemDetailsContainer() {
  const router = useRouter();
  const id = router?.query?.itemId;

  if (!id) return <div />

  return <ItemDetailPage itemId={id} />

}

class ItemDetailPage extends Component<ItemDetailProps, State>  {
  constructor(props: ItemDetailProps) {
    super(props);

    this.state = {
      itemsDetails: {
        name: "",
        image: "",
        price: 0,
        like_count: 0,
        description: "",
        shipping_fee: 0
      },
    }

  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${API_ROOT}/items/${this.props.itemId}`);
      this.setState({
        itemsDetails: response.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ItemDetail itemsDetails={this.state.itemsDetails} />
    )
  }
}

interface State {
  itemsDetails: ItemsDetails;
}

interface ItemDetailProps {
  itemId: String | String[];
}

export interface ItemsDetails {
  name: string;
  image: string;
  price: Number;
  like_count: Number;
  description: String;
  shipping_fee: Number;
}