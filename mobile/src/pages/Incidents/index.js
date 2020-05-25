import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text styles={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text styles={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text styles={styles.incidentValue}>R$120,00</Text>

          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
