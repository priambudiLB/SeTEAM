import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import styles from '../styles/uploader.module.css';
import {Page,Text,View,Document,StyleSheet,BlobProvider} from '@react-pdf/renderer';


export default function Uploader (){

  const [pdfFile,setPdfFile] = useState(null);
  const [error,setError] = useState('');
  function handleSubmit(){
    if(pdfFile.type !== null){

    }
  }
  return(
    <Box className={styles.pdfContainer} >
      <form>
        <input type={'file'} value={pdfFile} onChange={setPdfFile}/>
        <Button type='submit' colorScheme="teal" >Upload</Button>
      </form>
      <h4>View PDF</h4>
      <div className='pdf-container'>
      
      </div>
    </Box>
  );
}