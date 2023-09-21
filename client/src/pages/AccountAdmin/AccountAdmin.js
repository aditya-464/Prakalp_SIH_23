import React, { useState } from 'react'
import Adminnav from "../../components/Admin/AdminNav/Adminnav";
import Heroadmin from '../../components/Admin/HeroAdmin/Heroadmin';
import { Logout } from '../../components/Admin/Logout/Logout';
import { Box } from '@chakra-ui/react';
import { Profile } from '../../components/Admin/Profile/Profile';
import ProfileLogoutBtn from '../../components/Admin/ProfileLogoutBtn/ProfileLogoutBtn';
import Footer from '../../components/Footer/Footer';

export const AccountAdmin = () => {

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
        <Adminnav />
        <Box sx={styles.scrollbar} style={{ overflowY: 'scroll', height: 'calc(100% - 68px)' }}>
          <Heroadmin />
          <ProfileLogoutBtn setLogout={setLogout}/>
          {logout ? <Logout/> : <Profile />}
          <Footer />
        </Box>
      </Box >
    </>
  )
}