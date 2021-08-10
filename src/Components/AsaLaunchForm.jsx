import React, { useState } from 'react';
import "../style.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input as AntdInput } from "antd";
import { Modal, Spin } from 'antd';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import {createAsset} from "../AssetConfig";

const Form = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  
  const { control, handleSubmit } = useForm();
  

  const onSubmit = (data) => {
    setIsLoading(true);
    (async () => {
      var createAssetResponse = await createAsset(data.assetName, data.unitName, data.assetTotal, data.assetDecimals.value);
      success(createAssetResponse.assetId, createAssetResponse.assetName, createAssetResponse.managingAccount, createAssetResponse.managingPassphrase);
      setIsLoading(false);
      setIsExploding(true);
    })().catch(e => {
    error(JSON.stringify(e.message));
    setIsLoading(false);
}
);
}

  function success(assetId, assetName, managingAccount, managingPassphrase) {
  const assetLink = 'https://testnet.algoexplorer.io/asset/' + assetId;
  Modal.success({
    title: 'Congrats! ' + assetName + ' has been created!',
    content:     
    (
      <div>
        <p>Click here for a summary of your asset:</p>
        <a href={assetLink}>{assetLink}</a>
      </div>
    ),
  });
  }
  

function error(error) {
  Modal.error({
    title: 'Oops, that didn\'t work',
    content: 
    (
      <div>
        <p>Here's the error we received:</p>
        <code>{error}</code>
      </div>
    ),
  });
}

  return (
    <>
    {isLoading && <SpinAnimation />}
    {!isLoading && 
<form onSubmit={handleSubmit(onSubmit)}>
    {isExploding && <ConfettiExplosion />}
      <label style={{marginTop:'50px'}}>Asset Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="assetName"
        control={control}
        defaultValue=""
      />
      <label>Unit Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="unitName"
        control={control}
        defaultValue=""
      />
      <label>Asset Total</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        rules={[{ required: true }]}
        name="assetTotal"
        control={control}
        defaultValue=""
      />
      <label>Asset Decimals</label>
      <Controller
        name="assetDecimals"
        render={({ field }) => (
          <Select
            {...field}
            className="asset_decimals"
            options={
              [
              { value: "0", label: "0" },
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
              { value: "9", label: "9" },
              { value: "10", label: "10" },
            ]}
          />
        )}
        control={control}
        defaultValue={{ value: "0", label: "0" }}
      />

      
      
       
      <input className="submit_button buttonStyled" type="submit" />
    </form>
    }
    </>
  )};

const SpinAnimation = () => {


  return (
  <div className="spin_div">
    <Spin />
  </div>
  );
};

export default Form;