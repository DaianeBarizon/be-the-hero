import React from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <FlatList
        keyExtractor={(incident) => String(incident)}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$120,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
