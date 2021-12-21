import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import ListProduct from '../../components/ListProduct';
import { snService } from '../../services/sn.service';
import { TypeRoutes } from '../../routes';
import { ProductList } from '../../entities';
import styles from './styles';

export default function Home() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    const [products, setProducts] = React.useState<ProductList[]>();
    const [ refreshing, setRefreshing ] = React.useState(false);

    React.useEffect(() => {

        fetchProducts();

    }, []);

    function fetchProducts() {
        setRefreshing(true);

                snService.getProductList().then(response_produtos => {
                    setRefreshing(false);
                    if (response_produtos) setProducts(response_produtos);
                    else alert('Ocorreu um erro com a listagem de produtos!');
                });

    }

    console.log("teste index" + products);

    if (!products) return <Text>Carregando...</Text>

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            
            <FlatList
                data={products}
                onRefresh={fetchProducts}
                refreshing={refreshing}
                renderItem={({ item }) => <ListProduct product={item} />}
                keyExtractor={item => item.id ? item.id.toString() : ''}
            />

        </View>
    );
}