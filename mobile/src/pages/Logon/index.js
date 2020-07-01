import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import heroesImg from '../../assets/heroes.png';
import styles from './styles';
import api from '../../services/api';

export default function Logon() {
  const [incidents, setIncidents] = useState([]);
  const [id, setId] = useState();
  const [total, setTotal] = useState(0);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToIncidents() {
    navigation.navigate('Incidents');
  }

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {params: {page}});

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setpage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View style={styles.logonContainer}>
        <View style={styles.logonHeader}>
          <Image style={styles.logonLogoImg} source={logoImg} />
          <Image style={styles.logonHeroesImg} source={heroesImg} />
        </View>
        <Text style={styles.logonTitle}>Faça seu Logon</Text>
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholderTextColor={'#999'}
          placeholder={'Sua ID'}
          style={styles.logonInput}
          value={id}
        />
        <TouchableOpacity
          style={styles.logonButton}
          onPress={() => navigateToIncidents()}>
          <Text style={styles.logonButtonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.logonRegisterContainer}>
          <Feather
            style={styles.logonRegisterIcon}
            name="arrow-right"
            onPress={() => navigateToRegister()}
            size={14}
            color={'#e02041'}>
            <Text style={styles.logonRegisterText}>Não tenho cadastro</Text>
          </Feather>
        </View>
      </View>
    </ScrollView>
  );
}
