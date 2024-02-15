import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MenuCardStyle'

const MenuItemCard = ({ img, title, description, price  }) => {
  return (
    <View style={styles.card}>
        <Image style={styles.image} source={img}></Image>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.cart}>
            <Text style={styles.price}>R${price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity >
        </View>
    </View>
  );
};

export default MenuItemCard;
