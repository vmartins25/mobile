import React from 'react';
import { Text, View } from 'react-native';

import { ProductList } from '../../entities';
import styles from './styles';

type Props = { product: ProductList }

export default function ListProduct({ product }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dados do Produto </Text>
            <Text style={styles.text}>Id: {product.id}</Text>
            <Text style={styles.text}>Nome: {product.name}</Text>
            <Text style={styles.text}>Quantidade: {product.amount}</Text>
            <Text style={styles.text}>Preço: {product.price}</Text>
            <View style={styles.container_fabricante}>
                <Text style={styles.title}>Dados do Fabricante </Text>
                <Text style={styles.text}>Id: {product.factory.id}</Text>
                <Text style={styles.text}>Nome: {product.factory.name}</Text>
            </View>
        </View>
    );
}