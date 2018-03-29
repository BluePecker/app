import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    card                   : {
        width       : "100rem",
        marginBottom: "2rem",
    },
    cardHeader             : {
        height       : '12rem',
        marginTop    : '2rem',
        paddingTop   : 0,
        paddingBottom: 0,
        // backgroundColor: 'tomato'
    },
    cardHeaderLeft         : {
        height        : '12rem',
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems    : 'center',
    },
    cardHeaderLeftAvatar   : {
        height         : '9rem',
        width          : '9rem',
        borderRadius   : '4.5rem',
        backgroundColor: '#eeeff1',
    },
    cardHeaderLeftInfo     : {
        paddingLeft: '2.5rem',
        marginTop  : '1.5rem',
    },
    cardHeaderLeftInfoName : {
        fontSize  : '4.5rem',
        lineHeight: '5.5rem',
    },
    cardHeaderLeftInfoLabel: {
        height         : '9rem',
        width          : '9rem',
        borderRadius   : '4.5rem',
        backgroundColor: '#eeeff1',
    },
    cardHeaderRight        : {
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems    : 'center',
        height        : '12rem'
    },
    cardContent            : {
        paddingBottom: 0,
        paddingTop   : 0,
    },
    cardContentArticle     : {
        textAlign  : 'justify',
        marginLeft : 0,
        marginRight: 0,
        fontSize   : '4rem',
        lineHeight : '5rem',
        paddingTop : '1rem',
    },
    jiugongge              : {
        flexWrap      : 'wrap',
        flexDirection : 'row',
        justifyContent: 'flex-start',
    },
    jiugonggeItem          : {
        width          : '31.1rem',
        height         : '31.1rem',
        overflow       : 'hidden',
        margin         : '.2rem',
        backgroundColor: '#eeeff1',
        borderRadius   : '0.5rem',
    },
    cardFooter             : {
        margin        : 0,
        padding       : 0,
        alignItems    : 'center',
        justifyContent: 'center',
    },
    cardFooterButton       : {
        height: '8rem',
    },
    cardFooterButtonIcon   : {
        // color: ''
    },
    cardFooterButtonText   : {
        marginLeft: '0.8rem'
    },
});