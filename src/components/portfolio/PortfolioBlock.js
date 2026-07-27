import React from 'react';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, youtubeId, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         {youtubeId ? (
            <Box
               component={'iframe'}
               src={`https://www.youtube.com/embed/${youtubeId}`}
               title={title || 'YouTube video'}
               allowFullScreen
               sx={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  border: 0
               }}
            />
         ) : (
            <Box component={'img'} src={image} alt={'mockup'}/>
         )}
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;