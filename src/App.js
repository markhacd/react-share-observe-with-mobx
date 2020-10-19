import React from 'react';
import { observer } from 'mobx-react';
import DataStorage from './stores/DataStorage';
import Form from './components/form';

export default observer(() => {

  const mapData = () => {
    let data = DataStorage.data;

    return data.map((item, index) => {
    return <div>{item}</div>
    });
  }
  return (
    <>
    <div>{ mapData() }</div>
    <Form 
      DataStorage={DataStorage}
    />
    </>
  );
});
