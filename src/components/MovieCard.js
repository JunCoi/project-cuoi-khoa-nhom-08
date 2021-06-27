import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import VideoPopup from './VideoPopup';
import { PowerInputSharp } from '@material-ui/icons';
import { openPopup } from '../actions/popupAction';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  movieCard: {
    height: 318,
    backgroundImage: 'url(./images/trang-ti-215x318.jpg)',
    backgroundPosition: 'center',
    backGroundSize: 'contain',
    borderRadius: 4,
    position: 'relative',
    cursor: 'pointer',
    '&:hover > $buttonWrap': {
      opacity: 1,
    },
  },
  buttonWrap: {
    position: 'relative',
    opacity: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(251,251,251,0) 100%)',
    transition: 'opacity .3s',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 60,
    height: 60,
    color: '#f4f4f4',
    border: '1px solid rgb(255,255,255)',
    borderRadius: '50%',
    padding: 10,
    backgroundColor: 'rgba(255,255,255, .1)',
    cursor: 'pointer',
    transition: 'all 0.3s',

    '&:hover': {
      backgroundColor: 'rgba(255,255,255, .2)',
    },
  },
  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0, .7)',
    padding: 10,
    color: '#f3f3f3',
    borderRadius: 4,
  },
  movieTittle: {
    height: 48,
    fontWeight: 500,
    letterSpacing: 1,
    padding: 5,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  time: {
    fontSize: 14,
    padding: '0 10px',
  },
}));

export default function MovieCard(props) {
  const classes = useStyles();
  // const [isOpen, setIsOpen] = useState(false);
  // const [popupVideoLink, setPopupVideoLink] = useState('');
  const videoLink = 'https://www.youtube.com/embed/sx1ROHCmY-4';
  const dispatch = useDispatch();

  const handleOpen = (link) => {
    const newProps = {
      isOpen: true,
      link: link,
    };

    const action = openPopup(newProps);
    dispatch(action);
  };

  return (
    <>
      <div className={classes.movieCard}>
        <div className={classes.buttonWrap}>
          <PlayArrowRoundedIcon
            className={classes.playButton}
            onClick={() => handleOpen(videoLink)}
          />
        </div>
        {props.showRating ? <div className={classes.rating}>8/10</div> : ''}
      </div>
      <p className={classes.movieTittle}>Trạng tí</p>
      <p className={classes.time}>100 phút</p>
    </>
  );
}
