import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  typo: {
    height: '85px',
  },
  detailBox: {
    padding: '10px',
    width: '100%',
  },
  datVe: {
    width: '50%',
    margin: '30px auto 130px',
  },
  btnDatVe: {
    width: '100%',
    backgroundColor: '#4a4a4a',
    color: 'white',
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tenPhim, setTenPhim] = React.useState('');
  const [tenRap, setTenRap] = React.useState('');
  const [ngayXem, setNgayXem] = React.useState('');
  const [suatChieu, setSuatChieu] = React.useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className={classes.toolbar}></div>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={classes.typo}
          >
            <Typography className={classes.heading}>PHIM</Typography>
            <Typography className={classes.secondaryHeading}>
              {tenPhim}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Button
                onClick={() => {
                  setTenPhim('Vợ 3');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                Vợ 3
              </Button>
              <Button
                onClick={() => {
                  setTenPhim('Diệp Vấn');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                Diệp Vấn
              </Button>
              <Button
                onClick={() => {
                  setTenPhim('Iron Man');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                Iron Man
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className={classes.typo}
          >
            <Typography className={classes.heading}>RẠP</Typography>
            <Typography className={classes.secondaryHeading}>
              {tenRap}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Button
                onClick={() => {
                  setTenRap('BHD');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                BHD
              </Button>
              <Button
                onClick={() => {
                  setTenRap('CGV');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                CGV
              </Button>
              <Button
                onClick={() => {
                  setTenRap('Lotte Cinema');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                Lotte Cinema
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className={classes.typo}
          >
            <Typography className={classes.heading}>NGÀY XEM</Typography>
            <Typography className={classes.secondaryHeading}>
              {ngayXem}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Button
                onClick={() => {
                  setNgayXem('19/7/2021');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                19/7/2021
              </Button>
              <Button
                onClick={() => {
                  setNgayXem('20/7/2021');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                20/7/2021
              </Button>
              <Button
                onClick={() => {
                  setNgayXem('21/7/2021');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                21/7/2021
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className={classes.typo}
          >
            <Typography className={classes.heading}>XUẤT CHIẾU</Typography>
            <Typography className={classes.secondaryHeading}>
              {suatChieu}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Button
                onClick={() => {
                  setSuatChieu('08:00');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                08:00
              </Button>
              <Button
                onClick={() => {
                  setSuatChieu('14:30');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                14:30
              </Button>
              <Button
                onClick={() => {
                  setSuatChieu('21:15');
                  setExpanded(false);
                }}
                className={classes.detailBox}
              >
                21:15
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
        <div className={classes.datVe}>
          <Button className={classes.btnDatVe}>ĐẶT VÉ</Button>
        </div>
      </div>
    </>
  );
}
