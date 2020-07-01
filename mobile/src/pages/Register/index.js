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
import styles from './styles';
import api from '../../services/api';

export default function Logon() {
  const [incidents, setIncidents] = useState([]);
  const [id, setId] = useState();
  const [total, setTotal] = useState(0);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToLogon() {
    navigation.navigate('Logon');
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
        </View>
        <Text style={styles.logonTitle}>Cadastro</Text>
        <Text style={styles.logonSubTitle}>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </Text>
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholderTextColor={'#999'}
          placeholder={'Sua ID'}
          style={styles.logonInput}
          value={id}
        />
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholderTextColor={'#999'}
          placeholder={'Sua ID'}
          style={styles.logonInput}
          value={id}
        />
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholderTextColor={'#999'}
          placeholder={'Sua ID'}
          style={styles.logonInput}
          value={id}
        />
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholderTextColor={'#999'}
          placeholder={'Sua ID'}
          style={styles.logonInput}
          value={id}
        />
        <TextInput
          onChangeText={(text) => setId(text)}
          placeholderTextColor={'#999'}
          placeholder={'Sua ID'}
          style={styles.logonInput}
          value={id}
        />
        <TouchableOpacity
          style={styles.logonButton}
          onPress={() => navigateToLogon()}>
          <Text style={styles.logonButtonText}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.logonRegisterContainer}>
          <Feather
            style={styles.logonRegisterIcon}
            name="arrow-left"
            onPress={() => navigateToLogon()}
            size={14}
            color={'#e02041'}>
            <Text style={styles.logonRegisterText}>Não tenho cadastro</Text>
          </Feather>
        </View>
      </View>
    </ScrollView>
  );
}
