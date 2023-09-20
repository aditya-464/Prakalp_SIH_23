import React from 'react'
import Adminnav from "../components/Admin/AdminNav/Adminnav";
import Heroadmin from '../components/Admin/HeroAdmin/Heroadmin';
import { AddProject } from '../components/Admin/AddProject';
import { Box } from '@chakra-ui/react';
import { ViewProject } from '../components/Admin/ViewProject';
import { Routes, Route } from 'react-router-dom';
import Largebtn from '../components/LargeButton/Largebtn';

export const HomeAdmin = () => {

  const styles = {
    scrollbar: {
      '&::-webkit-scrollbar': {
        width: '10px',
        borderRadius: '8px',
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
    }
  }
  return (
    <>
      <Box className='HomeAdmin' height={'100vh'} overflow={'hidden'} >
        <Adminnav />
        <Heroadmin />
        <Box sx={styles.scrollbar} px={'65px'} py={'15px'} style={{ overflowY: 'scroll', height: 'calc(100% - 260px)' }}>

          <Largebtn />
          <Routes>
            <Route path='/'>
              <Route index element={<AddProject />} />
              <Route path='viewProject' element={<ViewProject />} />
            </Route>
          </Routes>

        </Box>
      </Box >

    </>
  )
}

