import React from 'react';
import {observer} from 'mobx-react';
import BaseLayoutView from '../../../../../../components/BaseLayoutView';
import HomeViewModel from '../ViewModels/HomeViewModel';
import HomeView from '../Views/HomeView';

interface Props {
  viewModel: HomeViewModel;
}

const HomeController = observer(({viewModel}: Props) => {
  return (
    <BaseLayoutView title="Home" loading={false}>
      <HomeView />
    </BaseLayoutView>
  );
});

export default HomeController;
