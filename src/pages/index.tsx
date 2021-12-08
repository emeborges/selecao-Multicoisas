
import { FC, useEffect, useState } from 'react'
import { Container } from '../styles/pages/Home'

import { api } from '../services/api'
import  Header  from '../styles/components/Header'
import  BannerImage  from '../styles/components/BannerImage';
import Informativo from '../styles/components/Informativo'
import NavegueDepart from '../styles/components/NevegueDepart';

interface ListaDepartamentos {
  id: number;
  groupid: number;
  name: string;
  url?: string;
  icon_image?:string;
}

const Home: FC = () => {
  const [departamentos, setDepartamentos] = useState<ListaDepartamentos[]>([])

  useEffect(() => {
    async function fetchMyAPI(){
        api.get('links')
        .then(response => setDepartamentos(response.data))
    } fetchMyAPI()
  },[])

  const dadosBanner = departamentos.filter( departamento => {
    return departamento.groupid === 2 ? true : false
  })

  
    return (
    <Container>
      <Header List={departamentos}/>
      <BannerImage List={dadosBanner}/>
      <Informativo />
      <NavegueDepart List={departamentos}/>
    </Container>
  )
};

export default Home
