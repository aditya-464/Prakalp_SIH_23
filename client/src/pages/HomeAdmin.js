import React from 'react'
import Adminnav from "../components/Admin/AdminNav/Adminnav";
import Heroadmin from '../components/Admin/HeroAdmin/Heroadmin';
import { AddProject } from '../components/Admin/AddProject';
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { ViewProject } from '../components/Admin/ViewProject';
import { Routes, Route, useNavigate } from 'react-router-dom';

export const HomeAdmin = () => {

  const navigate = useNavigate();

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
        <Box sx={styles.scrollbar} px={'65px'} py={'15px'} style={{ overflowY: 'scroll', height: 'calc(100% - 230px)' }}>
          <Flex my={'25px'} justify={'center'} align={'center'} >
            <ButtonGroup spacing={0}>
              <Button onClick={() => {
                navigate("/");
              }} py={'2rem'} px={'4rem'} letterSpacing={'2px'} borderRadius={'20px'} borderTopRightRadius={0} borderBottomRightRadius={0} fontSize={'1.25rem'} >Add</Button>
              <Button onClick={() => {
                navigate("/viewProject");
              }} py={'2rem'} px={'4rem'} letterSpacing={'2px'} borderRadius={'20px'} borderBottomLeftRadius={0} borderTopLeftRadius={0} fontSize={'1.25rem'}  >View</Button>
            </ButtonGroup>
          </Flex>
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

