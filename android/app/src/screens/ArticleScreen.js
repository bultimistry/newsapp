import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, StatusBar} from 'react-native'; 


const ArticleScreen = ({ route }) =>{
    const {article } = route.params; 

    return(
       <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image source={{uri: article.urlToImage }} style={styles.image} />
        <View style={styles.textContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.container}>{article.content}</Text>
        </View>
       

       </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
         
        backgroundColor: '#f5f5', 
    }, 
    image: {
        width: '100%', 
        height: 200,
    }, 
    textContainer: {
        padding: 16,
    },
    title: {
        fontSize:24, 
        fontWeight: 'bold', 
         color: '#333',
    },
    content: {
        fontSize: 16, 
        color: '#666',
        marginTop: 8,
    },
}); 
export default ArticleScreen;