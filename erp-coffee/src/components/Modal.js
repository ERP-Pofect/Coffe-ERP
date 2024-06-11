import React from 'react'
import '../scss/component/Modal.scss';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Button from '@mui/material/Button';

const Modal = ({ isOpen, onClose }) => {
    const [quantity, setQuantity] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [price, setPrice] = useState('');
    const unit = [
        {
            value: 'ea',
            label: 'ea',
        },
        {
            value: 'ml',
            label: 'ml',
        },
        {
            value: 'kg',
            label: 'kg',
        },
    ];
    const category = [
        {
          value: 'Product',
          label: '원재료',
        },
        {
          value: 'FinishedProduct',
          label: '완제품',
        },
      ];
      const formatPrice = (value) => {
        if (!value) return '';
    
        // 숫자를 문자열로 변환하고 천 단위마다 쉼표(,) 추가
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };
    
      // 가격 입력 시 표시 형식에 맞게 변환하여 저장하는 함수
      const handlePriceChange = (event) => {
        // 입력된 값에서 쉼표(,) 제거 후 숫자만 남기기
        const value = event.target.value.replace(/,/g, '');
    
        // 변환된 값을 저장
        setPrice(formatPrice(value));
      };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className='modal'>
                <div className='modal-content'>
                    <span className='close' onClick={onClose}>&times;</span>
                    <div className='head'>
                        <h2 className='title'>제품 등록</h2></div>
                    <div className='body'>
                        <div className='bodyBox1'>
                            <div className='detailBox1'>
                                <TextField
                                    id="productName"
                                    label="제품명"
                                    variant="outlined"
                                    className='inputBox' />
                            </div>
                            <div className='detailBox2'>
                                <TextField
                                    id="productNo"
                                    label="제품번호"
                                    variant="outlined"
                                    className='inputBox2' />
                            </div>
                        </div>
                        <div className='bodyBox2'>
                            <div className='detailBox3'>
                                <TextField
                                    id="registrantName"
                                    label="등록자명"
                                    variant="outlined"
                                    className='inputBox3' />
                            </div>
                            <div className='detailBox4'>
                                <TextField
                                    id="origin"
                                    label="원산지"
                                    variant="outlined"
                                    className='inputBox4' />
                            </div>
                        </div>
                        <div className='bodyBox3'>
                            <div className='detailBox5'>
                                <TextField
                                    id="quantity"
                                    label="수량"
                                    variant="outlined"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    className='inputBox5'
                                />
                                <TextField
                                    id="unit"
                                    label="단위"
                                    select
                                    value={selectedUnit}
                                    onChange={handleUnitChange}
                                    variant="outlined"
                                    className='inputBox6' >
                                    {unit.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                            className='unit'
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='detailBox7'>
                                <TextField
                                    id="purchase"
                                    label="구매처"
                                    variant="outlined"
                                    className='inputBox7' />
                            </div>
                        </div>
                        <div className='bodyBox4'>
                            <div className='detailBox7'>
                            <TextField
                                    id="category"
                                    label="분류"
                                    select
                                    variant="outlined"
                                    className='inputBox7' >
                                    {category.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                            className='category'
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='detailBox8'>
                                <TextField
                                    id="price"
                                    label="단가"
                                    variant="outlined"
                                    className='inputBox8'
                                    value={price}
                                    onChange={handlePriceChange} />
                            </div>
                        </div>
                        <Button className='productsubmit'
                         type='submit'
                         variant='contained'
                         sx={{ mt: 3, mb: 2 }}>제품 등록</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal