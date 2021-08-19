import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { ICategory } from '../store/model/category'


export interface CategoryProps {
  categoryList: ICategory[];
  activeCategoryId: Number;
  onChangeCategoryTab: (event: React.ChangeEvent, activeTabId: Number) => void;
}

function Category(props: CategoryProps) {
  const { categoryList, activeCategoryId, onChangeCategoryTab } = props;

  return (
    <Grid container alignItems="center" spacing={1}>
      <Tabs
        value={activeCategoryId}
        centered
        onChange={onChangeCategoryTab}
      >
        {
          categoryList.map((category: ICategory, index) => {
            return (
              <Tab label={category.name} key={index} />
            )
          })
        }
      </Tabs>
    </Grid>

  )
}

export default observer(Category)
