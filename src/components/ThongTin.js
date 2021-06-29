import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieDetailPage: {
    maxWidth: 940,
    margin: "auto",
  },
}));

function ThongTin() {
  const movieDetail = useSelector((state) => {
    return state.movieList.movieDetail;
  });

  const classes = useStyles();
  return (
    <div className={classes.movieDetailPage}>
      <p>{movieDetail.moTa}</p>
    </div>
  );
}

export default ThongTin;
