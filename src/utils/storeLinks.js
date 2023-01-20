import AsyncStorage from "@react-native-async-storage/async-storage";


//busca link salva
export async function getLinksSave(key) {
   const myLink = await AsyncStorage.getItem(key);

   let linkSave = JSON.parse(myLink) || [];
   return linkSave;
}




//salvar um link no storage
export async function saveLink(key, newLink) {

   let linkStored = await getLinksSave(key);

   //se tive algum link salvo com esse mesmo id/ ou duplicado precisa ignorar
   const hasLink = linkStored.some(link => link.id === newLink.id)
   if (hasLink) {
      console.log('esse link ja existe na lista');
      return;
   }

   linkStored.push(newLink);
   await AsyncStorage.setItem(key, JSON.stringify(linkStored))
}




//Deletar algum link especifico
export async function deleteLink(link, id) {
   let myLinks = link.filter((item) => {
      return (item.id !== id)

   })

   await AsyncStorage.setItem('links', JSON.stringify(myLinks))

   return myLinks;
}