import React, { useState } from 'react'
import '../../scss/user/UserModify.scss'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { Button } from '@mui/base';

const UserModify = () => {
  const [tel, setTel] = useState('');
  const team = [
    {
        value: 'Production',
        label: '생산',
    },
    {
        value: 'Purchase',
        label: '구매',
    },
    {
        value: 'Sales',
        label: '영업',
    },
];

const position = [
    {
        value: 'Clerk',
        label: '사원',
    },
    {
        value: 'Senior Clerk',
        label: '주임',
    },
    {
        value: 'Assistant Manager',
        label: '대리',
    },
    {
        value: 'Manager',
        label: '과장',
    },
    {
        value: 'Deputy General Manager',
        label: '차장',
    },
    {
        value: 'General Manager',
        label: '부장',
    },
    {
        value: 'Executive Director',
        label: '이사',
    },
    {
        value: 'CEO',
        label: '대표이사',
    },
]
const handlePhoneNumberChange = (event) => {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  setTel(formattedValue);
};
  return (
    <div className='container'>
      <div className='imgBox'>
      <img src={process.env.PUBLIC_URL + `/profile.png`} alt='프로필' />
      </div>
      <div className='modifyBox'>
        <div className='boxContainer'>
          <TextField id="userid" label="아이디" variant="outlined" className='userBox1' />
          <TextField id="password" label="비밀번호" variant="outlined" className='userBox2' type='password' />
          </div>
          <div className='boxContainer'>
          <TextField id="eno" label="사원번호" variant="outlined" className='userBox1' />
          <TextField id="name" label="이름" variant="outlined" className='userBox2' />
          </div>
          <div className='boxContainer'>
                    <TextField
                        id="Department"
                        select
                        label="부서"
                        className='userBox1'
                    >
                        {team.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                className='menu'
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="position"
                        select
                        label="직급"
                        className='userBox2'
                    >
                        {position.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='boxContainer'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{ width: '50%' }}>
                            <DatePicker 
                                className='dateBox'
                                label="입사일자"
                                />
                                </Box>
                    </LocalizationProvider>
                    <TextField 
                    id="tel" 
                    label="연락처" 
                    variant="outlined" 
                    className='userBox3' 
                    type='tel'
                    onChange={handlePhoneNumberChange}
                    value={tel}
                    InputProps={{inputProps: {maxLength: 11}}}
                    />
                </div>
                <div className='boxContainer'>
                    <TextField id="email" label="이메일" variant="outlined" className='userBox1' type='email' />
                </div>
                <div className='boxContainer'>
                <Button className='submitButton'>정보 수정</Button>
                </div>
      </div>
    </div>
  )
}

export default UserModify