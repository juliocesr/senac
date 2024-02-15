import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginBottom: 15,
        marginTop: 10
    },
    image: {
        marginBottom: 20,
        width: 280,
        height: 280
    },
    cart: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 40,
        marginRight: 25,
    },
    
});

export default styles;
