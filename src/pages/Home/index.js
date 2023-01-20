import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'

import { Menu } from '../../components/Menu';
import { StatusBarPage } from '../../components/StaturBar';
import { ModalLink } from '../../components/ModalLink';

import { api } from '../../services/api'
import { saveLink } from '../../utils/storeLinks'

import {
  ContainerLogo,
  ContainerContent,
  Logo,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";



export function Home() {

  const [data, setData] = useState({});
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  async function handleShortLink() {
    setLoading(true)
    try {
      const response = await api.post('/shorten',
        {
          long_url: input
        })

      setData(response.data)
      setModalVisible(true)


      // DEU TUDO CERTO PRECISO SALVAR ESSE LINK EM UMA LISTA NESSE STORAGE
      saveLink('links', response.data)


      Keyboard.dismiss()
      setLoading(false)
      setInput('')
      console.log(response.data);



    } catch {
      alert('Ops parece que algo deu errado.')
      Keyboard.dismiss()
      setLoading(false)
      setInput('')
    }

  }
  return (
    <TouchableWithoutFeedback >
      <LinearGradient
        colors={['#1ddbb9', '#132742']}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage
          barStyle='light-content'
          backgroundColor='#1ddbb9'
        />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >

          <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode='contain' />
          </ContainerLogo>

          <ContainerContent>

            <Title>Meus Links</Title>
            <SubTitle>Cole seu link para encutar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name='link' size={22} color='#fff' />
              </BoxIcon>
              <Input
                placeholderTextColor='#fff'
                placeholder='Cole seu link aqui...'
                autoCapitalize="none"
                autoCorrect={false}
                KeyboardType='url'
                onChangeText={text => setInput(text)}
                defaultValue={input}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {
                loading ? (
                  <ActivityIndicator size={24} color="#121212" />
                ) : (
                  <ButtonLinkText>Gerar Link</ButtonLinkText>
                )
              }

            </ButtonLink>

          </ContainerContent>

        </KeyboardAvoidingView>
        <Modal
          visible={modalVisible}
          transparent
          animationType='slide'
        >
          <ModalLink
            data={data}
            onClose={() =>
              setModalVisible(false)
            }
          />

        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}