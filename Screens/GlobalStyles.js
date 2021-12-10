import React from "react";
import { StyleSheet } from "react-native";



const globalStyles = StyleSheet.create({
//------------------------------------------HOME---------------------------------------------  
  Home: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  btnHome: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnText: {
    fontSize: 14,
    color: "#eccdaa",
    fontWeight: 'bold',
    textAlign: "center" 
  },
  btnTextFiltro: {
    fontSize: 14,
    color: "#161616",
    fontWeight: 'bold', 
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: '40%',
    // backgroundColor: 'red'
    
  },
  Container: {
    alignItems: "center",
  },
  btn: {
    backgroundColor: '#161616',
    paddingVertical: 8,
    paddingHorizontal: 9,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#eccdaa',
    
    shadowColor: "#fdfdfd",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 60,
    shadowRadius: 4.84,
    elevation: 10
  },
  btnFiltrosHome: {
    backgroundColor: '#fdfdfd',
    paddingVertical: 5,
    paddingHorizontal: 9,
    marginVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#eccdaa',
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 6,
  },
  img: {
    height: 50,
    width: 640,
    resizeMode: 'contain' // esta linea es para que se adapte al tam;o de la imagen
  },

  // --------------------------------------------CARD HOME --------------------------------------------
  cardsContainer: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 25,
    width: "95%",
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.84,

    elevation: 5,
  },
  menuCardsContainer: {
    flex: 1,
    alignSelf: "center",
    width: "95%",
    height: 150,
    marginVertical: 5,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.84,
    elevation: 5,
  },
  containerImgCard: {
    width: "31.6%",
    maxHeight: '5%',
    padding: 5,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  cardsHomeimg: {
    marginTop: 5,
    // backgroundColor: "red",
    width: 110,
    height: 120,
    borderRadius: 25,
    justifyContent: "center"
  },
  cardsMenuimg: {
    width: 80,
    height: 80,
    borderRadius: 25,

  },
  cardsDescriptionContainer: {
    // backgroundColor: 'green',
    maxHeight: '120%',
    height: '90%',
    width: '35%',
    alignSelf: "center",
    justifyContent: "space-around"
  },
  cardsDescriptionText: {
    // backgroundColor: 'lightblue',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontWeight: "bold",
   
  },
  cardsHomeTitle: {
    // backgroundColor: "#5555",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: '100%',
    color: '#161616',
    
  },
  btnContainerCard: {
    // backgroundColor: 'violet',
    maxHeight: '120%',
    height: 120,
    width: '31.6%',
    alignSelf: "flex-end",
    alignItems: "center",
    marginTop: -120,
    justifyContent: "space-around",
    
  },
  wspImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    
  },
  /// --------------------------------------------ACA TERMINAN  LOS ESTILOS DE LAS CARDS HOM -------
  //------------------------------CARDS MENU y DETAIL RESTO-----------------------------------------------------------------
  headerResto : {
    backgroundColor: "#eccdaa", 
        marginBottom: 10,
        borderColor: 'rgba(22, 22, 22, .2)',
        borderBottomWidth: 1,
        justifyContent: 'center',
        shadowColor: "#161616",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 60,
        shadowRadius: 4.84,

        elevation: 5,
  },
  cardsMenuContainer: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#f6efd3",
    marginVertical: 5,
    // paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 25,
    width: "100%",
    height: 150
  },
  cardsMenuDescriptionContainer: {
    maxHeight: '120%',
    height: '100%',
    width: '75%',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },
  cardsMenuTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    width: '100%',
    
  },
  cardsMenuDescriptionText: {
    textAlign: 'left',
    fontSize: 15,
    color: 'grey',
    marginTop: -15

  },
  containerImgCardMenu: {
    width: "25%",
    maxHeight: '5%',
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginTop: '-37%',
    marginRight: '3.5%'
  },
  cardsMenuimg: {
    // marginTop: 5,
    // backgroundColor: "red",
    width: 110,
    height: 120,
    borderRadius: 25,
    justifyContent: "center"
  },

  btnTodasComidas : {
          marginVertical: 7,
          width: "95%",
          height: "7%",
          alignSelf: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "#eccdaa",
          backgroundColor: "#f2f2f2",
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.84,

          elevation: 5,
  },
  categoriesViewDetail: {
    backgroundColor: "#4E4E4E",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(22, 22, 22, .2)',
    paddingVertical: 2,
    paddingHorizontal: 5,
    shadowColor: "#161616",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 60,
          shadowRadius: 4.84,

          elevation: 8,
  },
  //------------------------------------------------------------------------------------------------------

  // --------------------------------------------CATEGORIAS LOCAL --------------------------------------------
  categoriesView: {
    backgroundColor: "#4E4E4E",
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderWidth: 1,
    // borderColor: "#161616",

    //backgroundColor: "red",
  },
  categoriesText: {
    fontSize: 13,
    padding: 1,
    textAlign:"center",
    color: '#ECCEAB',
    
    fontWeight: "bold",
  },
  //----------------------------ACA TERMINA CATEGORIAS LOCALES --------------------------------------------

  // ---------------------------- PROFILE USER Y RESTO ----------------------------------------------------
  Perfilcontainer: {
    flex: 1,
    backgroundColor: "#d0d0d0",
  },
  imgContainer: {
    flex: 2,
    flexDirection: "row",
    marginTop: 5,
    // backgroundColor: 'red',
    maxHeight: "25%",
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  imgProfile: {
    height: 150,
    width: 150,
    borderRadius: 200,
    // resizeMode: 'contain' // esta linea es para que se adapte al tam;o de la imagen
  },
  nombreContainer: {
    flex: 2,
    // backgroundColor: 'grey',
    // marginHorizontal: 5,
    maxWidth: "60%",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  FavouriteContainer: {
    overflow: "scroll",
    backgroundColor: "#ecceab",
    maxHeight: "30%",
    height: "20%",
  },
  btnProfileResto: {
    color: 'transparent',
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 3,
    marginVertical: 4,
    height: "9%",
    width: '90%',
    alignSelf: "center",
    justifyContent: "center"
  },

  // ------------------------------------------------------------------------------------------------------
  //------------------------------MODAL PROFILES-----------------------------------------------------------
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //backgroundColor: "blur",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 30,
      height: 30,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",


  },
  //------------------------------------------------------------------------------------------------------
  //-------------------------------MODAL LOGIN Y DETAIL RESTO---------------------------------------------
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: '10%',
    //backgroundColor: "blur",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    height: "90%",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 100,
  },
  //------------------------------------------------------------------------------------------------------
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: '#ECCDAA',
   
  },
  componentTitle: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 30,
    
  },
  containerTitle: {
    flexDirection: "row",
    
  },
  navHome: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#161616",
  },
  touchLog: {
    marginTop: 10,
    maxWidth: "100%",
    width: '50%',
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#bd967e",
    padding: 10,
  },
  touchFlag: {
    marginTop: 10,
    maxWidth: "100%",
    width: '50%',
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffdfcb",
    borderWidth: 2,
    borderColor: "#bd967e",
    padding: 10,
  },
  fontLog: {
    color: "#392c28",
    fontWeight: "bold",
    textAlign: "center",
 

  },
  btnContainerLogin: {
    flex: 6,
    alignItems: "center",
    maxWidth: '80%',
    width: '100%',
    maxHeight: '70%',
    height: '100%'
  },
  btnLogin : {
    marginVertical: 7,
    width: "95%",
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#161616",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.84,

    elevation: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    width: "100%",
    

  },
  texts: {
    color: "#000",
    textAlign: "center",
    width: "100%",
    fontSize: 14.5,
    fontWeight: "bold",
    
    paddingVertical: 1,
  },
  textDownButton: {
    textAlign: "center",
    
    width: "100%",
    fontSize: 13,
    marginTop: 5,
  },
  errorText: {
    textAlign: "center",
    width: "100%",
    fontSize: 12,
    
  },
  textContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "70%",
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputComponent: {
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(22, 22, 22, .2)',
    maxWidth: '100%',
    width: '60%',
  },
  modalInputContainer: {
    flex: 2,
    alignItems: "center",
    maxWidth: '100%',
    width: '80%',
  },
});

export default globalStyles;