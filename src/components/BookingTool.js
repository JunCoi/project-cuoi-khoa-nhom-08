import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formWrap: {
    width: '100%',
    height: 80,
    position: 'relative',
    zIndex: 4,
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  formBlock: {
    display: 'block',
    position: 'absolute',
    boxShadow: '0 0 10px rgb(0 0 0 / 30%)',
    borderRadius: 4,
    width: '90%',
    maxWidth: 940,
    height: '100%',
    left: '50%',
    transform: 'translate(-50%, -55%)',
    backgroundColor: 'white',
  },
  formPhim: {
    width: '30%',
    marginTop: 6,
    padding: '0 10px',
  },
  formOther: {
    width: 'calc(70% / 4)',
    marginTop: 6,
    padding: '0 10px',
  },
  buttonWrap: {
    width: 'calc(70% / 4)',
    margin: 0,
    float: 'right',
    height: '100%',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    top: 'calc(50% - 3px)',
    left: '50%',
    transform: 'translate(-50% , -50%)',
    backgroundColor: '#4a4a4a',
    color: 'white',
    padding: '10px 20px',

    '&:hover': {
      backgroundColor: '#4a4a4a',
    },
  },
}));

export default function BookingTool() {
  const classes = useStyles();
  const [maPhim, setMaPhim] = useState();
  const [tenRap, setTenRap] = useState();
  const [ngayXem, setNgayXem] = useState();
  const [suatChieu, setSuatChieu] = useState();

  const handleChangePhim = (e) => setMaPhim(e.target.value);
  const handleChangeRap = (e) => setTenRap(e.target.value);
  const handleChangeNgayXem = (e) => setNgayXem(e.target.value);
  const handleChangeSuatChieu = (e) => setSuatChieu(e.target.value);

  return (
    <div className={classes.formWrap}>
      <div className={classes.formBlock}>
        <FormControl className={classes.formPhim}>
          <InputLabel style={{ left: 20, color: 'rgba(0, 0, 0, 0.54)' }}>
            Phim
          </InputLabel>
          <Select
            labelId="phim-select-label"
            id="phim-select"
            value={maPhim}
            onChange={handleChangePhim}
            disableUnderline
          >
            <MenuItem value={1329}>Bàn tay diệt quỷ</MenuItem>
            <MenuItem value={1344}>Lật mặt 48h</MenuItem>
            <MenuItem value={1404}>Trạng tí</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formOther}>
          <InputLabel style={{ left: 10, color: 'rgba(0, 0, 0, 0.54)' }}>
            Rạp
          </InputLabel>
          <Select
            labelId="rap-select-label"
            id="rap-select"
            value={tenRap}
            onChange={handleChangeRap}
            disableUnderline
          >
            <MenuItem value={'rap-1'}>Rạp 1</MenuItem>
            <MenuItem value={'rap-2'}>Rạp 2</MenuItem>
            <MenuItem value={'rap-3'}>Rạp 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formOther}>
          <InputLabel style={{ left: 10, color: 'rgba(0, 0, 0, 0.54)' }}>
            Ngày xem
          </InputLabel>
          <Select
            labelId="ngay-xem-select-label"
            id="ngay-xem-select"
            value={ngayXem}
            onChange={handleChangeNgayXem}
            disableUnderline
          >
            <MenuItem value={'hom-nay'}>Hôm nay</MenuItem>
            <MenuItem value={'ngay-mai'}>Ngày mai</MenuItem>
            <MenuItem value={'ngay-kia'}>Ngày kia</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formOther}>
          <InputLabel style={{ left: 10, color: 'rgba(0, 0, 0, 0.54)' }}>
            Suất chiếu
          </InputLabel>
          <Select
            labelId="suat-chieu-select-label"
            id="suat-chieu-select"
            value={suatChieu}
            onChange={handleChangeSuatChieu}
            disableUnderline
          >
            <MenuItem value={'8AM'}>8AM</MenuItem>
            <MenuItem value={'12PM'}>12PM</MenuItem>
            <MenuItem value={'6PM'}>6PM</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.buttonWrap}>
          <Button variant="contained" className={classes.button}>
            MUA VÉ NGAY
          </Button>
        </div>
      </div>
    </div>
  );
}
