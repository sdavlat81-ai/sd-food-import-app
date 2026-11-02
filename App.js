
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, SafeAreaView
} from 'react-native';

const products = [
  { id: 1, name: 'Coca-Cola 1.5 L', price: 13500, wholesale: 12000, emoji: '🥤' },
  { id: 2, name: 'Lay’s chips 150 g', price: 12000, wholesale: 10500, emoji: '🍟' },
  { id: 3, name: 'Suv 1.5 L', price: 7000, wholesale: 6000, emoji: '💧' },
  { id: 4, name: 'Shokolad', price: 16000, wholesale: 14000, emoji: '🍫' },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(old => [...old, product]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.crown}>♛</Text>
          <Text style={styles.logo}>SD FOOD</Text>
          <Text style={styles.logo}>IMPORT</Text>
          <Text style={styles.cart}>🛒 {cart.length}</Text>
        </View>

        <TextInput
          style={styles.search}
          placeholder="⌕  Mahsulot qidirish..."
          placeholderTextColor="#aaa"
        />

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Premium Market</Text>
          <Text style={styles.bannerText}>
            Sifatli mahsulotlar — qulay narxlarda!
          </Text>
          <Text style={styles.bannerEmoji}>🛍️ 🥑 🥐</Text>
          <Text style={styles.bannerButton}>Xarid qilish →</Text>
        </View>

        <Text style={styles.heading}>Kategoriyalar</Text>
        <View style={styles.categories}>
          {['🍎 Oziq-ovqat', '🥤 Ichimliklar',
            '🍬 Shirinliklar', '📦 Barchasi'].map(item => (
            <TouchableOpacity key={item} style={styles.category}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          <Text style={styles.heading}>Mashhur mahsulotlar</Text>
          <Text style={styles.gold}>Barchasi →</Text>
        </View>

        <View style={styles.products}>
          {products.map(product => (
            <View key={product.id} style={styles.product}>
              <Text style={styles.productEmoji}>{product.emoji}</Text>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.price}>
                {product.price.toLocaleString('en-US')} so‘m
              </Text>
              <Text style={styles.wholesale}>
                Ulgurji: {product.wholesale.toLocaleString('en-US')} so‘m
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(product)}
              >
                <Text style={styles.addText}>＋ Savatga</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            SD FOOD IMPORT © 2026
          </Text>
          <Text style={styles.gold}>Sifatli mahsulot — ishonchli hamkor</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#080808' },
  header: {
    alignItems: 'center', padding: 18,
    borderBottomWidth: 1, borderColor: '#A87918'
  },
  crown: { color: '#E8B83F', fontSize: 35 },
  logo: { color: '#E8B83F', fontSize: 25, fontWeight: '900', letterSpacing: 3 },
  cart: { position: 'absolute', right: 20, top: 28, color: '#F5CC65', fontSize: 19 },
  search: {
    backgroundColor: '#202020', color: 'white',
    margin: 16, padding: 14, borderRadius: 25,
    borderWidth: 1, borderColor: '#99701F'
  },
  banner: {
    margin: 16, padding: 22, borderRadius: 18,
    backgroundColor: '#211807', borderWidth: 1, borderColor: '#D5A52E'
  },
  bannerTitle: { color: '#F4C85E', fontSize: 27, fontWeight: 'bold' },
  bannerText: { color: 'white', fontSize: 16, marginTop: 8 },
  bannerEmoji: { fontSize: 35, marginVertical: 15 },
  bannerButton: {
    color: '#171006', backgroundColor: '#E8B83F',
    padding: 12, borderRadius: 22, overflow: 'hidden',
    textAlign: 'center', fontWeight: 'bold', alignSelf: 'flex-start'
  },
  heading: { color: '#F1C75E', fontSize: 19, fontWeight: 'bold', margin: 16 },
  categories: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10 },
  category: {
    width: '46%', margin: '2%', padding: 15,
    borderWidth: 1, borderColor: '#A87918',
    borderRadius: 12, backgroundColor: '#171717'
  },
  categoryText: { color: '#F5D37B', textAlign: 'center', fontSize: 13 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  gold: { color: '#E8B83F', marginRight: 15 },
  products: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8 },
  product: {
    width: '46%', margin: '2%', padding: 12,
    backgroundColor: '#191919', borderRadius: 14,
    borderWidth: 1, borderColor: '#70531B'
  },
  productEmoji: { fontSize: 48, textAlign: 'center', padding: 10 },
  productName: { color: 'white', fontWeight: 'bold', marginVertical: 8 },
  price: { color: '#F2C34F', fontWeight: 'bold', fontSize: 15 },
  wholesale: { color: '#B9A36C', fontSize: 12, marginTop: 5 },
  addButton: {
    backgroundColor: '#DDAE38', padding: 10,
    borderRadius: 9, marginTop: 12
  },
  addText: { color: '#160F03', textAlign: 'center', fontWeight: 'bold' },
  footer: { alignItems: 'center', padding: 30 },
  footerText: { color: 'white', marginBottom: 8 }
});
