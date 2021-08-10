import React, { useState } from 'react';
import "../style.css";
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


const { confirm } = Modal;

const Header = () => {
  const [activeNet, setActiveNet] = useState('Test Net');
  return (
    <>
    <div style={{height:'20px'}}></div>
    <div style={{height:'120px'}}>
      <div style={{display: 'flex',  justifyContent:'center'}}>
      <span style={{color:'white'}} className="big_sentence">AlgoGen<span className="input-cursor"></span></span>
      </div>
    </div>
    <div style={{height:'80px', float:'right', marginRight:'10%'}}>
      <NetButton activeNet={activeNet} onNetChange={() => {
        alert('This feature isn\'t quite ready yet!');
        if (activeNet === 'Main Net') {
          //setActiveNet('Test Net');
        } else {
          //setActiveNet('Main Net');
        }
      }}
        />
    </div>
    <div style={{height:'70px'}}></div>
    </>
  );
};

 const NetButton = (props) => {
  const nonActiveNet = () => {
        if (props.activeNet === 'Test Net') {
          return 'Main Net';
        } else {
          return 'Test Net';
        }
  }

  return (
      <Button
      type="primary"
      className="netButton"
      style={{float:'right', marginRight:'10%'}} 
      onClick={() => 
              confirm({
          title: 'Do you want to switch to the '+ nonActiveNet() +'?',
          icon: <ExclamationCircleOutlined />,
          content: 'You are currently configuring a token on the ' + props.activeNet,
          okText: 'Yes',
          cancelText: 'No',
          onOk() {
            props.onNetChange();
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        })
      }
      >{props.activeNet}
      </Button>
        );
 };

export default Header;