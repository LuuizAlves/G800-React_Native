/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  NativeModules
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const [ numberAlig, setNumberAlign ] = useState(1);
  const [ numberStyle, setNumberStyle ] = useState(0);

  const [ numberText, setNumberText ] = useState('12345');
  const [ numberHeight, setNumberHeight ] = useState(100);
  const [ numberWidht, setNumberWidth ] = useState(100);
  const [ numberType, setNumberType ] = useState('QR_CODE');

  const [ message, setMessage ] = useState('');

  function typeStyle(number){
    setNumberStyle(number);
  }
  function typeAlig(number){
    setNumberAlign(number);
  }

  function typeText(text){
    setNumberText(text);
  };
  function typeHeight(number){
    setNumberHeight(number);
  };
  function typeWidth(number){
    setNumberWidth(number);
  };
  function typeType(type){
    setNumberType(type);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
        keyboardShouldPersistTaps='always'
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.headerApp}>
            <Text style={styles.textTitle}>Terminal-Smart-G800</Text>
          </View>


          <View style={styles.body}>

            <Text style={styles.messageUser}>Mensagem: </Text>
            <TextInput
              style={styles.styleInput}
              placeholder="Escreva sua mensagem"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              value={message}
              onChangeText={setMessage}
            />

            {/* //CONTAINER DE OPÇÕES PARA ALINHAMENTO DE TEXTO */}
            <Text style={styles.messageUser}>Alinhamento: </Text>
            <View style={styles.contentTypeAlign}>
              <TouchableOpacity
                  onPress={() => typeAlig(1)}
                  style={numberAlig === 1 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
              >
                  <Text 
                      style={numberAlig === 1 ? [styles.textSubject, {color: '#FFF', fontWeight: 'bold'}] : styles.textSubject}
                  >Esquerda</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                  onPress={() => typeAlig(2)}
                  style={numberAlig === 2 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
              >
                  <Text 
                      style={numberAlig === 2 ? [styles.textSubject, {color: '#FFF', fontWeight: 'bold'}] : styles.textSubject}
                  >Centralizado</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => typeAlig(3)}
                  style={numberAlig === 3 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
              >
                  <Text 
                      style={numberAlig === 3 ? [styles.textSubject, {color: '#FFF', fontWeight: 'bold'}] : styles.textSubject}
                  >Direita</Text>
              </TouchableOpacity>
            </View>

            {/* //CONTAINER DE OPÇÕES PARA ESTILO DE TEXTO */}
            <Text style={styles.messageUser}>Estilo: </Text>
            <View style={styles.contentTypeAlign}>
              <TouchableOpacity
                  onPress={() => typeStyle(1)}
                  style={numberStyle === 1 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
              >
                  <Text 
                      style={numberStyle === 1 ? [styles.textStyleBold, {color: '#FFF'}] : styles.textStyleBold}
                  >Negrito</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                  onPress={() => typeStyle(2)}
                  style={numberStyle === 2 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
              >
                  <Text 
                      style={numberStyle === 2 ? [styles.textStyleItalic, {color: '#FFF'}] : styles.textStyleItalic }
                  >Itálico</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={() => typeStyle(3)}
                  style={numberStyle === 3 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
              >
                  <Text 
                      style={numberStyle === 3 ? [styles.textStyleItalicBold, {color: '#FFF'}] : styles.textStyleItalicBold }
                  >Negrito Itálico</Text>
              </TouchableOpacity>
            </View>

            {/* //BUTTONS PRINT MESSAGE AND IMAGE */}
            <View style={styles.contentButtons}>
              <TouchableOpacity style={styles.buttonMessageImage}
                onPress={() => { NativeModules.ToastExample.printTextInTost(message, numberAlig, numberStyle)}}
              >
                <Text style={styles.textMessageImage}>Imprimir Mensagem</Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={true}
                style={[styles.buttonMessageImage, {backgroundColor: '#dddddd'}]}
              >
                <Text style={styles.textMessageImage}>Imprimir Imagem</Text>
              </TouchableOpacity>
            </View>

            {/* //TEXT AND CONTAINER ABOUT OPTIONS BAR CODE */}
            <Text style={styles.messageUser}>Código de barras: </Text>
            <View style={styles.contentPrintBarCode}>
              <View>
                <Text>Height:</Text>
                <View style={styles.contentHeighWidthType}>
                  <TouchableOpacity
                      onPress={() => typeHeight(100)}
                      style={numberHeight == 100 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberHeight == 100 ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >100</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                      onPress={() => typeHeight(200)}
                      style={numberHeight == 200 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberHeight == 200 ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >200</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={() => typeHeight(300)}
                      style={numberHeight == 300 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberHeight == 300 ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >300</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View>
                <Text>Width:</Text>
                <View style={styles.contentHeighWidthType}>
                  <TouchableOpacity
                      onPress={() => typeWidth(100)}
                      style={numberWidht == 100 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberWidht == 100 ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >100</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                      onPress={() => typeWidth(200)}
                      style={numberWidht == 200 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberWidht == 200 ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >200</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={() => typeWidth(300)}
                      style={numberWidht == 300 ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberWidht == 300 ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >300</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text>Type:</Text>
                <View style={styles.contentHeighWidthType}>
                  <TouchableOpacity
                      onPress={() => {typeType('QR_CODE'), typeText('12345')}}
                      style={numberType == 'QR_CODE' ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : styles.subjectDefault}
                  >
                      <Text 
                          style={numberType == 'QR_CODE' ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >QR CODE</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={() => {typeType('EAN_8'), typeText('12345678')}}
                      disabled={true}
                      style={numberType == 'EAN_8' ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : [styles.subjectDefault, {backgroundColor: '#dddddd'}]}
                  >
                      <Text 
                          style={numberType == 'EAN_8' ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >EAN 8</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                      onPress={() => {typeType('EAN_13'), typeText('5901234123457')}}
                      disabled={true}
                      style={numberType == 'EAN_13' ? [styles.subjectDefault, {backgroundColor: '#5bf5d1', borderColor: '#5bf5d1'}] : [styles.subjectDefault, {backgroundColor: '#dddddd'}]}
                  >
                      <Text 
                          style={numberType == 'EAN_13' ? [styles.textSubject, {color: '#FFF'}] : styles.textSubject}
                      >EAN 13</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* //BUTTON PRINT BAR CODE */}
            <TouchableOpacity
              onPress={() => { NativeModules.ToastExample.printBarCodeInToast(numberText, numberHeight, numberWidht, numberType) }}
              style={styles.buttonPrintAll}
            >
              <Text style={{color: '#FFF'}}>Imprimir Código de Barras</Text>
            </TouchableOpacity>

            {/* //CONTAINER AND TEXT ABOUT READ BAR CODE */}
            <Text style={styles.messageUser}>Leitura de Códigos: </Text>
            <View style={styles.contentButtonsReadCode}>
              <TouchableOpacity
                disabled={true}
                style={[styles.buttonReadCode, {backgroundColor: '#dddddd'}]}
              >
                <Text style={styles.textReadCode}>EAN 8</Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={true}
                style={[styles.buttonReadCode, {backgroundColor: '#dddddd'}]}
              >
                <Text style={styles.textReadCode}>EAN 13</Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={true}
                style={[styles.buttonReadCode, {backgroundColor: '#dddddd'}]}
              >
                <Text style={styles.textReadCode}>QR CODE</Text>
              </TouchableOpacity>
            </View>

            {/* //BUTTON PRINT ALL */}
            <TouchableOpacity
              onPress={ () => {
                NativeModules.ToastExample.printTextInTost('**Negrito**', 2, 1);
                NativeModules.ToastExample.printTextInTost('**Itálico**', 2, 2);
                NativeModules.ToastExample.printTextInTost('**Negrito Itálico**', 2, 3);
                NativeModules.ToastExample.printBarCodeInToast(numberText, 100, 100, numberType);
                NativeModules.ToastExample.printBarCodeInToast(numberText, 200, 200, numberType);
                NativeModules.ToastExample.printBarCodeInToast(numberText, 300, 300, numberType);
              } }
              style={styles.buttonPrintAll}
            >
              <Text style={{color: '#FFF'}}>Imprimir todas funções</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  headerApp: {
    width: '100%',
    height: 60,
    backgroundColor: '#6d00a3',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10
  },
  messageUser: {
    fontSize: 15,
    marginTop: 5
  },
  styleInput: {
    width: '100%',
    height: 50,
    borderBottomColor: '#6d00a3',
    borderBottomWidth: 1
  },
  textSubject: {
    color:  'gray',
    fontSize: 13,
  },

  contentTypeAlign: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  subjectDefault: {
    width: 100,
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },

  textStyleBold: {
    color:  'gray',
    fontSize: 13,
    fontWeight: 'bold'
  },
  textStyleItalic: {
    color:  'gray',
    fontSize: 13,
    fontStyle: 'italic'
  },
  textStyleItalicBold: {
    color:  'gray',
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  contentButtons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  buttonMessageImage: {
    width: '47%',
    height: 45,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#6d00a3'
  },
  textMessageImage: {
    color: '#FFF'
  },

  contentPrintBarCode: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  contentHeighWidthType: {

  },

  contentButtonsReadCode: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  buttonReadCode: {
    width: '32%',
    height: 45,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#6d00a3'
  },
  textReadCode: {
    color: '#FFF'
  },

  //STYLES BUTTON PRINT ALL
  buttonPrintAll: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#6d00a3',
    borderRadius: 50,
  },
});

export default App;
