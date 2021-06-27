import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NowShowingMovies from './NowShowingMovies';
import UpComingMovies from './UpComingMovies';

const useStyles = makeStyles((theme) => ({
  moviesList: {
    maxWidth: 940,
    margin: 'auto',
  },
}));

export default function MoviesList() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.moviesList}>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Đang chiếu" />
        <Tab label="Sắp chiếu" />
      </Tabs>
      {selectedTab === 0 && <NowShowingMovies />}
      {selectedTab === 1 && <UpComingMovies />}
    </div>
  );
}
