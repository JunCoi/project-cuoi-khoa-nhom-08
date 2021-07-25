import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  movieDetailPage: {
    maxWidth: 940,
    margin: 'auto',
    padding: '20px 10px',
  },
}));

function ThongTin() {
  const movieDetail = useSelector((state) => {
    return state.movieList.movieDetail;
  });

  const classes = useStyles();
  return (
    <div className={classes.movieDetailPage}>
      <p style={{fontSize: "18px", margin: "40px 0"}}>{movieDetail.moTa}</p>
    </div>
  );
}

export default ThongTin;
