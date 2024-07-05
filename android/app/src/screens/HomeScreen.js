import React, { useEffect, useState } from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native'; 
import axios from "axios";


const HomeScreen = ({ navigation }) => {
    const[articles, setArticles ] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try{
             const response = await axios.get(' https://newsapi.org/v2/everything?q=bitcoin&apiKey=3766ef7711c94d10ae5b048cfdc6a7ec')
              setArticles(response.data.articles);
            }catch(error){
                console.error(error);
            }
        }; 
        fetchArticles();
    },[]);


    const renderItem =({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Article', {article: item})}>
            <View style={styles.articleContainer}>
                <Image source={{uri: item.urlToImage }} style= {styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
           
          <FlatList 
           data={articles} 
           keyExtractor={(item) => item.url}
           renderItem={renderItem} 
           contentContainerStyle={styles.list}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5', 
        paddingHorizontal: 16, 
        paddingTop: 16,
        
    }, 
    list: {
        paddingBottom: 16,
    },
    articleContainer: {
        backgroundColor: '#fff', 
        marginBottom: 16, 
        borderRadius: 8, 
        overflow: 'hidden', 
        elevation: 3,

    }, 

    image: {
      width: '100%',
      height: 200,
    },

    textContainer: {
        padding: 16,
    }, 

    title: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#333', 
    },

    description: {
        fontSize: 14, 
        color: '#666', 
        marginTop: 8, 
    },
}); 
export default HomeScreen;