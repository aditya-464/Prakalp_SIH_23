import React, { useState } from 'react'
import Usernav from "../../components/User/UserNav/Usernav";
import Herouser from '../../components/User/HeroUser/Herouser';
import { AddProject } from '../../components/Admin/AddProject/AddProject';
import { Box } from '@chakra-ui/react';
import { ViewProject } from '../../components/Admin/ViewProject/ViewProject';
import HomeBtnGroup from '../../components/User/HomeBtnGroup/HomeBtnGroup';
import Footer from '../../components/Footer/Footer';

export const HomeUser = () => {

  const [showView, setShowView] = useState(false);

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
          <Herouser name={'Aditya'}/>
          <HomeBtnGroup setShowView={setShowView} />
          {/* {showView ? <ViewProject /> : <AddProject />} */}
          {/* <Footer /> */}
        </Box>
      </Box >

    </>
  )
}

