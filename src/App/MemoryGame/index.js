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
    imageContainer: {
      mx: 'auto',
      my: 0,
      p: '40px 40px 4px',
      maxWidth: '640px',
      backgroundColor: '#D0AD96',
    },
    wave: {
      display: 'flex',
    },
    listItem: {
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      cursor: 'pointer',
      display: 'relative',
    },
    cardBack: {
      padding: '1px',
      backfaceVisibility: 'hidden',
      backgroundColor: '#A06740',
      borderRadius: '5%',
      boxShadow: '#20221C 0px 2px 4px 0px',
      textAlign: 'center',
    },
    cardFront: {
      padding: '1px',
      backfaceVisibility: 'hidden',
      backgroundColor: '#676751',
      borderRadius: '5%',
      boxShadow: '#20221C 0px 2px 4px 0px',
      textAlign: 'center',
      transform: 'rotateY(180deg)',
      position: 'absolute',
      top: '0px',
      left: '-2px',
    },
  };

  React.useEffect(() => {
    if (cardSelection.length >= 2) {
      if (cardSelection[0].src === cardSelection[1].src) {
        setSuccess(cardSelection[0]);
      } else {
        setTimeout(() => {
          setCardSelection([]);
        }, 1500);
      }
    }
  }, [cardSelection]);

  React.useEffect(() => {
    const cardData = [
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
        body: 'Feel free to contact me and send email if you want to reach out',
        testid: 'email',
        src: emailImg,
        link: 'angelicab.contact@gmail.com',
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
    cardData.forEach((i) => {
      t = [...t, {
        ...i,
        testid: `${i.testid}-1`,
      }];
    });

    setImages([...cardData, ...t].sort(() => 0.5 - Math.random()));
  }, []);

  const handleClose = () => {
    setSuccess();
    setCardSelection([]);
  };

  return (
    <Box
      data-testid="memory-game-wrapper"
    >
      <Box sx={{ backgroundColor: '#D0AD96' }}>
        <ImageList
          gap={8}
          cols={3}
          sx={styles.imageContainer}
        >
          {images.map((item) => (
            <ImageListItem
              key={item.testid}
              onClick={() => (
                cardSelection.length < 2 && !cardSelection.includes(item)
                  ? setCardSelection([...cardSelection, item])
                  : undefined)}
              style={{
                transform: cardSelection.includes(item) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                ...styles.listItem,
              }}
            >
              <img
                data-testid={`${item.testid}-card-back`}
                src={cardBack}
                alt={item.alt}
                style={styles.cardBack}
              />
              <img
                data-testid={item.testid}
                src={item.src}
                alt={item.alt}
                style={styles.cardFront}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <svg style={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D0AD96" fillOpacity="1" d="M0,32L120,32C240,32,480,32,720,37.3C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" /></svg>
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
