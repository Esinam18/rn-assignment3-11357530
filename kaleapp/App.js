import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput ,ScrollView, registerCallableModule} from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
        <View style={styles.upperSection}>
           <Text style={styles.customFont}>Hello, Devs</Text>
        </View>
           <View style={styles.underUpper}>
              <Text style={styles.taskText}>14 tasks today</Text>
           </View>
           <View style={styles.picAlign}>
              <Image source={require('./image/profile.png')} style={styles.proImage}/>
           </View>
             <View style={styles.searchPart}>
                <Image source={require('./image/search.png')} style={styles.searchImg}/>
                <TextInput style={styles.searchBar}
                   placeholder="Search"
                    placeholderTextColor= '#000000'
                    placeholderFont='Lato'
                    placeholderFontSize='16'
                   />
                   <Image source={require('./image/filter.png')} style={styles.iconFilter}
                   />
             </View> 
    <Text style={styles.catText}>Categories</Text>
    <View style={styles.motherContainer}>
    <ScrollView horizontal={true}>
    <View style={styles.catContainer}>
    <Text style={styles.exText}>Exercise</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card1.png')} style={styles.secPic}/>
      </View>
      <View  style={styles.catContainer}>
      <Text style={styles.exText}>Study</Text>
      <Text  style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card2.png')} style={styles.secPic}/>
      </View>
      <View style={styles.catContainer}>
      <Text style={styles.exText}>Laundry</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card3.png')} style={styles.secPic}/>
      </View>
      <View style={styles.catContainer}>
      <Text style={styles.exText}>Cook</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card4.png')} style={styles.secPic}/>
      </View>
      <View style={styles.catContainer}>
      <Text style={styles.exText}>Clean</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card5.png')} style={styles.secPic}/>
      </View>
      <View style={styles.catContainer}>
      <Text style={styles.exText}> Code</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card6.png')} style={styles.secPic}/>
      </View>
      <View style={styles.catContainer}>
      <Text style={styles.exText}>Play</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card7.png')} style={styles.secPic}/>
      </View>
      <View style={styles.catContainer}>
      <Text style={styles.exText}>Eat</Text>
    <Text style={styles.subText}>12 Tasks</Text>
      <Image source={require('./image/card8.png')} style={styles.secPic}/>
      </View>
    </ScrollView>
      </View>
      <View style={styles.vertList}>
      <Text style={styles.catText} >Ongoing Task</Text>
      <ScrollView vertical ={true}>
      <View style={styles.rectangle}>
        <Text style={styles.onText}> Mobile App Development</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Web Development</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}>Push Ups </Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}>Cleaning and Organizing the House</Text>
        </View><View style={styles.rectangle}>
        <Text style={styles.onText}> Planning a Trip or Vacation</Text>
        </View><View style={styles.rectangle}>
        <Text style={styles.onText}> Learning a New Language</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Developing a Side Project</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Reading a Book</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}>Grocery Shopping</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Attending an Online Course</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Networking with Professionals</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Social Media Content Creation</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}>Painting or Drawing</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}> Planning a Trip or Vacation</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.onText}>Self-Care Routine</Text>
        </View>
        </ScrollView>
      </View>
   
 
  </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop:50,
    paddingHorizontal:20,
  },
  upperSection:{
    flexDirection:'row',
   justifyContent:'space-between',
     alignItems:'center',
     marginBottom: 10,
  },
  customFont:{
    fontFamily:'Lato',
    fontSize:32 ,
    fontWeight:'bold',
    lineHeight:38.4,
  },
  underUpper:{
   marginBottom:20,
  },
  taskText:{
     fontSize:12,
     fontFamily:'lato',
     fontWeight:'500',
     lineHeight:14.4,
  },
  proImage:{
  width:50,
  height:52,
  borderRadius:25,
  },
  picAlign:{
    position:'absolute',
    top:55,
    right: 20,
    
  },
  searchPart:{
    flexDirection:'row',
    alignItems:'center',
    width: '100%',
    height: 48,
    borderColor:'#FBF9F7',
    borderWidth: 1,
    borderRadius:14,
    paddingLeft:10,
    backgroundColor:'#FBF9F7',
    marginBottom:20,
  },
  searchImg:{
    width: 20,
    height: 20,
    marginRight:10,
  },
  searchBar:{
    flex:1,
    fontSize: 16,
    color:'black',
  },
  iconFilter:{
    left:15,
  width: 50,
  height: 48,
 
  },
  catText:{
    width:150,
    height:24,
    fontFamily:'Lato',
    fontSize: 20,
    fontWeight: '700',
    lineHeight:24,
    color: '#000000' ,
    marginBottom:10,
  
  },
  motherContainer:{
    flexDirection:'row',
     marginBottom:20,
  },

  catContainer:{
    backgroundColor: '#FBF9F7',
    height:192,
    borderRadius:15,
    width:160,
    marginRight:15,
    justifyContent:'center',
    alignItems:'center,'
  
  },
 
  secPic:{
    width:131,
    height:120 ,
    marginTop:10,
    
  },
  exText:{
   padding:10,
   fontSize:16,
   fontWeight:'700',
   
  },
  subText:{
    fontFamily:'lato',
    fontSize:12,
    fontWeight:'400',
    color: '#000000',
    marginLeft:10,
    marginTop:-10,
   
  },
secContainer:{
     backgroundColor: '#FBF9F7',
      height:192,
      borderRadius:15,
      width:160,
},
vertList:{
 flex:1,
  },
rectangle:{
backgroundColor:'#FBF9F7',
width: 350,
height: 120,
borderRadius:15,
borderWidth: 1,
borderColor:'#E8D1BA',
marginBottom:15,
justifyContent:'center',
alignItems:'center',

},
 onText:
 {
  fontFamily:'lato',
  left: -30,
  fontSize:16,
  fontWeight:'700',
 },
});

