import React from 'react';

interface ComboBoxProps{header:string, data:any, value?:string, defaultValue?:string, onChange?:(arg0: any)=>void}


const ComboBox = ({header, data, value, defaultValue, onChange}:ComboBoxProps) => {
    console.log(data);
    
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {defaultValue?<option selected disabled value="">{defaultValue}</option>:<p/>}
            {data
            ?data.map((option:any) =><option key={option.id} value={option.id}>{option.name}</option>)
            :<option></option>}
        </select>
    );
};

export default ComboBox;