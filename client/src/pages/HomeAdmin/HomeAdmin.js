import React, { useState } from 'react'
import Adminnav from "../../components/Admin/AdminNav/Adminnav";
import Heroadmin from '../../components/Admin/HeroAdmin/Heroadmin';
import { AddProject } from '../../components/Admin/AddProject/AddProject';
import { Box } from '@chakra-ui/react';
import { ViewProject } from '../../components/Admin/ViewProject/ViewProject';
import AddViewbtn from '../../components/Admin/AddViewBtn/AddViewbtn';

export const HomeAdmin = () => {

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
        <Adminnav />
        <Box sx={styles.scrollbar} style={{ overflowY: 'scroll', height: 'calc(100% - 68px)' }}>
          <Heroadmin />
          <AddViewbtn setShowView={setShowView} />
          {showView ? <ViewProject /> : <AddProject />}

        </Box>
      </Box >

    </>
  )
}

