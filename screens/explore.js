import React, {Fragment,Component} from 'react'
import {View,Text,Image, StyleSheet,Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { Card, ListItem, Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width: screenWidth} = Dimensions.get('window');
class explore extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            images: [
              
              'https://source.unsplash.com/1024x768/?water',
              'https://source.unsplash.com/1024x768/?girl',
              'https://source.unsplash.com/1024x768/?tree',
              'https://source.unsplash.com/1024x768/?nature'
            ],
        };      
    }
    _smallImages ({item, index}) {
        const jobs =[
            'Web Designer',
            'Software Developer',
            'Mobile App Developer',
            'Software Tester'
        ]
        var ex = jobs[index]
        return (
            <View style={style.container} >
               <Card
                image={{uri:item}}
                imageStyle={{height:hp('27%'), width:wp('90%')}}
                featuredTitle={ex}
                containerStyle={{height:hp('27%'), width:wp('90%')}}>   
                <ParallaxImage 
                containerStyle={style.imageContainer}
                style={style.image}
                parallaxFactor={0.8}
                /> 
                </Card>
            </View>
        );
    }
    _bigImages ({item, index}) {
        return (
            <View style={style.container} >
               <Card
                image={{uri:item}}
                imageStyle={{height:hp('50%'), width:wp('100%'), position:"relative"}}>           
            </Card>
            </View>
        );
    }

    onLayout = e =>{
        this.setState({
            width : e.nativeEvent.layout.width
        })
    }

    render(){
        return(
            <View style={{flex:1}}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={hp('50%')}
                    parentWidth = {this.state.width} /> 
                    
                <View style={style.input}>
                <Text></Text>
                <Input containerStyle={style.insert}  placeholder='Which job are you looking for?' 
                  leftIcon={
                    <Icon
                    style={{paddingRight:wp('1%')}}
                      name='search'
                      size={20}
                      color="#90d9e6"
                    />
                  }
                />
                </View>
                  
                  <View style={{position:"absolute", paddingTop:hp('22%'), paddingLeft:20}}>
                      <Text style={{color:"white", fontSize:30,shadowOpacity:0, shadowColor:"black"}}>Johannesburg</Text>
                      <Text></Text>
                      <Text style={{color:"white", fontSize:20}}>500 jobs posted this month</Text>
                      <Text></Text>
                      <Button title="View Jobs"  containerStyle={{width:150}} buttonStyle={{borderRadius:30}} />
                  </View>
                  
                <Text></Text>
                <Text style={style.text}>Popular Jobs</Text>
                <Carousel
                    data={this.state.images}
                    sliderWidth={wp('100%')}
                    sliderHeight={hp('20%')}
                    ref={ref => this.carousel = ref}
                    itemWidth={wp('85%')}
                    itemHeight={hp('20%')}
                    renderItem={this._smallImages}
                    hasParallaxImages={true}
            />
            </View>
        )
    }
}

const style = StyleSheet.create({
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
    container:{
    flexDirection:'row', 
    alignItems: 'center',
    justifyContent: 'center',
    },

    text:{
        fontSize: 20,
        paddingLeft: wp('5%'),
        fontWeight: "200"
    },
    input:{
        position:"absolute", 
        width:wp('95%'),
        paddingTop:hp('4%'),
        paddingLeft: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row', 
    },
    insert:{
        backgroundColor:"white", 
        borderRadius:30,
    }
})

export default explore;