import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    header           : {
        width          : '100rem',
        height         : '61.8rem',
        overflow       : 'hidden',
    },
    headerMask       : {
        width          : '100rem',
        height         : '61.8rem',
        position       : 'absolute',
        zIndex         : 1,
        backgroundColor: '#000',
        opacity        : 0.125,
    },
    headerGoBack     : {
        position: 'absolute',
        zIndex  : 2,
        top     : '8rem',
        left    : '1rem',
    },
    headerAvatar     : {
        position: 'absolute',
        zIndex  : 2,
        top     : '16.5rem',
        left    : '4rem',
    },
    headerAvatarImage: {
        backgroundColor: '#eeeff1',
        width          : '9rem',
        height         : '9rem',
        borderRadius   : '4.5rem',
    },
    headerMap        : {
        width   : '100rem',
        height  : '61.8rem',
        position: 'absolute',
        zIndex  : 0,
    },
    headerButton     : {
        position       : 'absolute',
        zIndex         : 2,
        top            : '14.5rem',
        right          : '2.5rem',
        backgroundColor: '#FA729B',
        borderRadius   : '1.5rem',
        padding        : 0,
    },
    contentWrapper   : {
        width: '100rem',
    },
    content          : {
        fontSize: '4rem',
    },
});