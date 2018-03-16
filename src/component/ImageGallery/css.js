import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    mask       : {
        width          : '100rem',
        backgroundColor: '#000'
    },
    header     : {
        position     : 'absolute',
        top          : '3.8 * $dem',
        flexDirection: 'row',
    },
    left       : {flex: 1},
    close      : {
        textAlign : 'left',
        height    : '4 * $dem',
        lineHeight: '4 * $dem',
        color     : '#fff',
    },
    middle     : {flex: 3},
    index      : {
        textAlign : 'center',
        color     : '#fff',
        fontSize  : '5rem',
        height    : '4 * $dem',
        lineHeight: '4 * $dem',
    },
    right      : {flex: 1},
    share      : {
        textAlign : 'right',
        height    : '4 * $dem',
        lineHeight: '4 * $dem',
        color     : '#fff',
    },
    swiper     : {
        justifyContent: 'center',
        alignItems    : 'center',
        height        : '85 * $dem',
        marginTop     : '7.8 * $dem',
        overflow      : 'hidden',
    },
    swiperImage: {
        width : '100rem',
        height: '92.2 * $dem',
    },
});