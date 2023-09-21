import React, { useState } from 'react'
import Usernav from "../../components/User/UserNav/Usernav";
import Herouser from '../../components/User/HeroUser/Herouser';
import { Box } from '@chakra-ui/react';
import { ViewProject } from '../../components/Admin/ViewProject/ViewProject';
import HomeBtnGroup from '../../components/User/HomeBtnGroup/HomeBtnGroup';
import Footer from '../../components/Footer/Footer';
import Following from '../../components/User/Following/Following';
import Bookmarks from '../../components/User/Bookmarks/Bookmarks';
import Trending from '../../components/User/Trending/Trending';
import Search from '../../components/User/Search/Search';

export const HomeUser = () => {

  const [showView, setShowView] = useState('following');
  const showClickedContent = (showView) =>{
    switch (showView) {
      case 'following':
        return <Following/>;
      case 'bookmarks':
        return <Bookmarks/>;
      case 'trending':
        return <Trending/>;
      case 'search':
        return <Search/>;
    
      default:
        break;
    }
  }

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
          {showClickedContent(showView)}
          {/* <Footer /> */}
        </Box>
      </Box >

    </>
  )
}

