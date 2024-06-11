import React, { useState } from 'react'
import '../../scss/production/ProductList.scss';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/base';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../../components/Modal';

const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menu = [
    {
      value: 'Product',
      label: '원재료',
    },
    {
      value: 'FinishedProduct',
      label: '완제품',
    },
  ];

  return (
    <div className='PlContainor'>

      {/* Search */}

      <div className='PlBox'>
        <div className='titleBox'>재고현황</div>
        <div className='buttonBox'>
          <Button
            className='productButton'
            type='submit'
            variant='contained'
            onClick={() => setIsModalOpen(true)}
            sx={{ mt: 3, mb: 2 }}>제품등록</Button>
            <Modal
              isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}           
            />
        </div>
      </div>

      <div className='PlSearchContainor1'>
        <div className='searchBox'>
          <SearchIcon
            className='searchIcon'
          />
        </div>
        <div className='PlSearchBox1'>
          <div className='PlSearch1'>
            <TextField
              id="productName"
              label="제품명"
              variant="outlined"
              className='searchBox1' />
          </div>

          <div className='PlSearch1'>
            <TextField
              id="productNo"
              label="제품번호"
              variant="outlined"
              className='searchBox1' />
          </div>

          <div className='PlSearch1'>
            <TextField
              id="origin"
              label="원산지"
              variant="outlined"
              className='searchBox1' />
          </div>

        </div>

        <div className='PlSearchBox2'>
          <div className='PlSearch2'>
            <TextField
              id="purchase"
              label="구매처"
              variant="outlined"
              className='searchBox2' />
          </div>

          <div className='PlSearch2'>
            <TextField
              id="registrantName"
              label="등록자명"
              variant="outlined"
              className='searchBox2' />
          </div>

          <div className='PlSearch2'>
            <TextField
              id="menu"
              select
              label="분류"
              className='searchBox2'
            >
              {menu.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  className='menu'
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

      </div>


      <div className='line'></div>

      {/* List */}

      <div className='PlSearchContainor2'>
        <div className='PlListBox'>
          <div className='PlList'>
            <p className='PlListText'>선택</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>제품명</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>제품번호</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>등록자명</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>원산지</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>단위</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>구매처</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>구분</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>단가</p>
          </div>
          <div className='PlList'>
            <p className='PlListText'>수정/삭제</p>
          </div>
        </div>

        {/* Map 돌릴거 */}
        <div>

        </div>

      </div>
    </div>
  )
}

export default ProductList