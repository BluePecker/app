import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    mask       : {
        width: '100rem',
    },
    header     : {
        position     : 'absolute',
        top          : '3.8 * $dem',
        flexDirection: 'row',
    },
    left       : {
        flex: 1
    },
    close      : {
        height    : '4 * $dem',
        lineHeight: '4 * $dem',
        color     : '#fff',
    },
    middle     : {flex: 4},
    index      : {
        textAlign : 'center',
        color     : '#fff',
        fontSize  : '5rem',
        height    : '4 * $dem',
        lineHeight: '4 * $dem',
    },
    right      : {
        flex: 1
    },
    share      : {
        height    : '4 * $dem',
        lineHeight: '4 * $dem',
        color     : '#fff',
    },
    swiper     : {
        justifyContent: 'center',
        alignItems    : 'center',
        overflow      : 'hidden',
    },
    swiperImage: {
        width          : '100%',
        height         : '100%',
        backgroundColor: '#000',
    },
});