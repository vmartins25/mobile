import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from "react-native";

import MyTextInput from '../../components/MyTextInput';
import { snService } from '../../services/sn.service';
import { TypeRoutes } from '../../routes';

import styles from './styles';
import { User } from '../../entities';

export default function SignUp() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' });
    }, []);

    const[address, setAddress] = React.useState('');
    const[age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [confirmar, setConfirmar] = React.useState('');

    async function save() {
        if ( !address || !age ||  !name || !email || !userPassword) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        if (userPassword !== confirmar) {
            alert('A senha não confere!');
            return;
        }
        
        const user: User = {
            address, 
            age,
            email: email.toLowerCase(),
            name, 
            userPassword
        };
        
        console.log(user);

        const savedUser = await snService.createUser(user);
        try {
            if (savedUser) {
                navigation.goBack();
            } else {
                alert('Usuário já existente!');
            }
        } catch (error) {
            console.error('Erro ao criar um novo usuário: ', error);
            alert('Ocorreu um erro não esperado!');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informe os dados do Usuário</Text>

            <MyTextInput title="Endereço:" value={address} onChangeText={setAddress} />

            <MyTextInput title="Idade:" value={age} onChangeText={setAge} />

            <MyTextInput title="Email:" value={email} onChangeText={setEmail} />

            <MyTextInput title="Nome:" value={name} onChangeText={setName} />
            
            <MyTextInput title="Senha:" value={userPassword} onChangeText={setUserPassword} secureTextEntry />
            <MyTextInput title="Confirmar senha:" value={confirmar} onChangeText={setConfirmar} secureTextEntry />

            <Button title="Cadastrar" onPress={save} />
        </View>
    );
}