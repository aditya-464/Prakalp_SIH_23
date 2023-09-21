import React, { useState } from 'react'
import Usernav from "../../components/User/UserNav/Usernav";
import Herouser from '../../components/User/HeroUser/Herouser';
import { Profile } from '../../components/User/Profile/Profile';
import { Logout } from '../../components/User/Logout/Logout';
import { Box } from '@chakra-ui/react';
import ProfileLogoutBtn from '../../components/Admin/ProfileLogoutBtn/ProfileLogoutBtn';

export const AccountUser = () => {

  const [logout, setLogout] = useState(false);

  const styles = {
    scrollbar: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }
  }
  return (
    <>
      <Box className='HomeAdmin' height={'100vh'} overflow={'hidden'} >
        <Usernav />
        <Box sx={styles.scrollbar} style={{ overflowY: 'scroll', height: 'calc(100% - 68px)' }}>
          <Herouser name={"Aditya"}/>
          <ProfileLogoutBtn setLogout={setLogout}/>
          {logout ? <Logout/> : <Profile />}
        </Box>
      </Box >
    </>
  )
}