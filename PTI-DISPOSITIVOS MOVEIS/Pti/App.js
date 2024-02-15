import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import MenuItemCard from './components/MenuCard'

const MenuScreen = () => {
  const products = [
    { id: 1, title: 'Hamburger Duplo cheddar', description: 'Descrição do produto 1', price: 10, img: require('./assets/img/img1.jpg')},
    { id: 2, title: 'Hamburger Salada', description: 'Descrição do produto 2', price: 20, img: require('./assets/img/img2.jpg') },
    { id: 3, title: 'Hamburger Molho madeira', description: 'Descrição do produto 3', price: 30, img: require('./assets/img/img3.jpg') },
  ];
  return (
    <ImageBackground source={require('./assets/img/img4.jpg')}
        style={styles.imageBackground}>
      <ScrollView>
        <View style={{ flexDirection: 'column', width: 320, marginLeft: 35, marginTop: 100 }}>
          {products.map((product) => (
              <MenuItemCard
                key={product.id}
                img={product.img}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
        </View>
      </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center'
    },
    linearGradient: {
      flex: 1,
    },
})

export default MenuScreen;
