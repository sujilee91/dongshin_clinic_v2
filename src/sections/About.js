import React from 'react';
import { withStyles, MuiThemeProvider , Card, CardContent} from '@material-ui/core';
import Title from '../components/Title';
import theme from '../styles/theme'
import Slider from 'react-slick'
import Sam from '../images/Sam.png'
import GNU from '../images/GNU.png'
import Asan from '../images/Asan.png'
import backImage from '../images/med.png'
import scope from '../images/Scope.png'
import medkit from '../images/Medkit.png'
import corp from '../images/Corp.png'


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]:{
      padding: '25px',
    },
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto'
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center'
  },
  imageContianer:{},
  image: {
    width: '100%',
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(160),
    textAlign: 'center',
    margin: 'auto',
    width: '100%'
  },
  cards: {
    margin: '20px',
    minHeight: '250px',
    display: 'grid',
    borderRadius: '12px',
  },
  slickSlider: {
    marginBottom: '50px'
  },
  cardGradient: {
    background: '#043E77',
    maxHeight: '28px',
    verticalAlign: 'middle',
    padding: '10px'
  },
  cardContent: {
    fontFamily: 'Gothic A1',
    fontSize: 18,
    fontWeight: 300,
    textAlign:'right',
  },
  inner: {
    padding: '5px 0px'
  },
  cardTitle: {
    fontFamily: 'Do Hyeon',
    fontSize: 22,
    fontWeight: 600,
    verticalAlign: 'middle',
    color: '#ffff'
  },
  img: {
    width: '150px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '25px',
    margin: 'auto',
    padding: '5px 0px'
  },  
  backImage: {
    width: theme.typography.pxToRem(120),
    opacity: '0.3',
    position: 'absolute',
    bottom: '30px'
  },
});

class About extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      type: ''
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render(){
    const { classes } = this.props
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root} name="병원 소개">
        <div className={classes.container}>
          <Title value={'병원 소개'}/>
          <Slider {...sliderSettings} className={classes.slickSlider}>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                    <span className={classes.cardTitle}>원장 약력</span>
                </div>
                <CardContent className={classes.cardContent}>
                  <div className={classes.inner}>울산 해성병원 가정의학과 과장</div>
                  <div className={classes.inner}>가정의학과 전문의</div>
                  <div className={classes.inner}>내시경전문의</div>
                  <div className={classes.inner}>노인 의학 전문의</div>
                  <div className={classes.inner}>동신의원 원장 20년</div>
                  <img src={backImage} className={classes.backImage} alt="bg"/>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                    <span className={classes.cardTitle}>검사</span>
                </div>
                <CardContent className={classes.cardContent}>
                  <div className={classes.inner}>위 내시경 (내시경 전문의)</div>
                  <div className={classes.inner}>초음파 / 골다공증 검사</div>
                  <div className={classes.inner}>심전도 / 방사선 검사</div>
                  <div className={classes.inner}>갑상선 / 간기능 / 신기능 검사</div>
                  <div className={classes.inner}>각종 혈액 / 각종 암 검사</div>
                  <img src={scope} className={classes.backImage} alt="bg"/>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                    <span className={classes.cardTitle}>검진</span>
                </div>
                <CardContent className={classes.cardContent}>
                  <div className={classes.inner}> 종합 검진</div>
                  <div className={classes.inner}> 국민건강보험 무료 검진</div>
                  <img src={medkit} className={classes.backImage} alt="bg"/>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                    <span className={classes.cardTitle}>협력 병원</span>
                </div>
                <CardContent className={classes.cardContent}>
                  <img src={Asan} className={classes.img} alt="Asan"/>
                  <img src={GNU} className={classes.img} alt="GNU"/>
                  <img src={Sam} className={classes.img} alt="Samsung"/>
                  <img src={corp} className={classes.backImage} alt="bg"/>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(About);
