import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Modal, ActivityIndicator } from 'react-native';

import { Menu } from '../../components/Menu';
import { ListItem } from '../../components/ListItem';
import { ModalLink } from '../../components/ModalLink';
import { StatusBarPage } from '../../components/StaturBar';

import { getLinksSave, deleteLink } from '../../utils/storeLinks';

import {
  Container,
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText
} from './styles';

export function MyLinks() {

  const isFocused = useIsFocused();

  const [data, setData] = useState({})
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)



  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('links')
      setLinks(result)
      setLoading(false)
    }

    getLinks()
  }, [isFocused])


  function handleItem(item) {
    setData(item)
    setModalVisible(true)
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id)
    setLinks(result)
  }


  return (
    <Container >
      <StatusBarPage
        barStyle='light-content'
        backgroundColor='#132742'
      />
      <Menu />

      <Title>Meus Links</Title>

      {
        loading && (
          <ContainerEmpty>
            <ActivityIndicator color="#fff" size={25} />
          </ContainerEmpty>
        )
      }

      {
        !loading && links.length === 0 && (
          <ContainerEmpty>
            <WarningText>Você ainda não possui nenhum link :( </WarningText>
          </ContainerEmpty>
        )
      }

      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem
          data={item}
          selectedItem={handleItem}
          deleteItem={handleDelete}
        />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showVerticalScrollIndicator={false}
      />


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
    </Container>
  );
}