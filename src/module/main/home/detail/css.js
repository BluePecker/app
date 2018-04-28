import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    'sealWrapper'          : {
        position  : 'absolute', bottom: 0, height: '24rem', width: '26rem',
        alignItems: 'center', justifyContent: 'center',
    },
    'sealCircle'           : {
        height    : '18rem', width: '26rem',
        alignItems: 'center', justifyContent: 'center',
        overflow  : 'hidden',
    },
    'sealCircleAvatar'     : {
        position: 'absolute', top: 0,
    },
    'sealRectangle'        : {
        height: '6.4rem', width: '26rem',
    },
    'sealRectangleUsername': {
        lineHeight: '6.4rem', textAlign: 'center', backgroundColor: 'transparent',
    },
    'calloutWrapper'       : {
        position: 'absolute', right: 0, bottom: 0,
        height  : '6.4rem', marginRight: '2rem',
    },
    'calloutPublicTime'    : {
        textAlign : 'center', backgroundColor: 'transparent',
        lineHeight: '6.4rem', color: 'red', fontSize: '3.2rem',
    },
});