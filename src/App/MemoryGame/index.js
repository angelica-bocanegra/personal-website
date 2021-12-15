// @flow
import * as React from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
} from '@mui/material';

import SuccessModal from './SuccessModal';

import linkedInImg from '../images/linkedIn.png';
import emailImg from '../images/email.png';
import gitHubImg from '../images/gitHub.png';
import cardBack from '../images/card-back.png';

const MemoryGame = (): React.Node => {
  const [cardSelection, setCardSelection] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [success, setSuccess] = React.useState();

  const styles = {
    image: {
      padding: '1px',
      backfaceVisibility: 'hidden',
      backgroundColor: '#A5A58D',
      borderRadius: '5%',
      boxShadow: '#2b2d25 0px 8px 14px',
      textAlign: 'center',
    },
  };

  React.useEffect(() => {
    if (cardSelection.length >= 2) {
      if (cardSelection[0].src === cardSelection[1].src) {
        setSuccess(cardSelection[0]);
        // if the array's alt matches the other one then open modal
      } else {
        setTimeout(() => {
          setCardSelection([]);
        }, 2000);
      }
    }
  }, [cardSelection]);

  React.useEffect(() => {
    const imageData = [
      {
        alt: 'gitHub',
        title: 'GitHub',
        body: 'Check out my GitHub Profile',
        testid: 'github',
        src: gitHubImg,
        link: 'https://github.com/angelica-bocanegra',
      },
      {
        alt: 'email',
        title: 'Contact Me',
        body: 'Feel free to send me and email if you want to reach out',
        testid: 'email',
        src: emailImg,
        link: 'mailto:angelicab.contact@gmail.com',
      },
      {
        alt: 'LinkedIn',
        title: 'LinkedIn',
        body: 'Check out my LinkedIn Profile',
        testid: 'LinkedIn',
        src: linkedInImg,
        link: 'https://www.linkedin.com/in/angelicabocanegra/',
      },
    ];

    let t = [];
    imageData.forEach((i) => {
      t = [...t, {
        ...i,
        testid: `${i.testid}-1`,
      }];
    });

    setImages([...imageData, ...t].sort(() => 0.5 - Math.random()));
  }, []);

  const handleClose = () => {
    setSuccess();
    setCardSelection([]);
  };

  return (
    <Box
      data-testid="memory-game-wrapper"
      sx={{
        backgroundColor: '#6b705c',
      }}
    >
      <ImageList
        gap={8}
        cols={3}
        sx={{
          m: 'auto',
          padding: '24px',
          maxWidth: '640px',
          backgroundColor: '#6b705c',
        }}
      >
        {images.map((item) => (
          <ImageListItem
            key={item.testid}
            onClick={() => (
              cardSelection.length < 2 && !cardSelection.includes(item)
                ? setCardSelection([...cardSelection, item])
                : undefined)}
            style={{
              ...(cardSelection.includes(item)
                ? {
                  transform: 'rotateY(180deg)',
                }
                : {
                  transform: 'rotateY(0deg)',
                }
              ),
              borderRadius: '5%',
              transition: 'transform 0.6s',
              transformStyle: 'preserve-3d',
              cursor: 'pointer',
              display: 'relative',
            }}
          >
            <img
              data-testid={`${item.testid}-card-back`}
              src={cardBack}
              alt={item.alt}
              style={{
                ...styles.image,
              }}
            />
            <img
              data-testid={item.testid}
              src={item.src}
              alt={item.alt}
              style={{
                ...styles.image,
                transform: 'rotateY(180deg)',
                position: 'absolute',
                top: '0px',
                left: '-2px',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {success && (
        <SuccessModal
          handleClose={handleClose}
          variant={success}
        />
      )}
    </Box>
  );
};

export default MemoryGame;
