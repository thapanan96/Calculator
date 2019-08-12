import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FlexDimensionsBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum : '0', text : '0', mem : 0, sign : "" };
  }
  btnNum(n){
    var temp = this.state.sum;
    if(temp == "0" && temp.length==1){
      temp = n;
    }
    else{ 
      temp += n;
    }
    if(this.state.text == "0" && this.state.text.length==1){
      this.setState({text:n});
    }
    else{
      this.setState({text:this.state.text+n});
    }
    //temp = temp+n;
    this.setState({sum:temp});
  }
  btnClear(){
    this.setState({sum:"0",text:"0",mem:0,sign:""});
  }
  btnEqual(){
    var temp;
    if(this.state.sign=="+"){
      temp = Number(this.state.mem)+Number(this.state.sum);
      this.setState({mem:temp,text:"0",sum:temp,sign:""});
    }
    else if(this.state.sign=="-"){
      temp = Number(this.state.mem)-Number(this.state.sum);
      this.setState({mem:temp,text:"0",sum:temp,sign:""});
    }
    else if(this.state.sign=="x"){
      temp = Number(this.state.mem)*Number(this.state.sum);
      this.setState({mem:temp,text:"0",sum:temp,sign:""});
    }
    else if(this.state.sign=="/"){
      temp = Number(this.state.mem)/Number(this.state.sum);
      this.setState({mem:temp,text:"0",sum:temp,sign:""});
    }
  }
  btnSign(n){
    var temp;
    var y = this.state.sum;
    if(this.state.sign == ""){
      this.setState({mem:Number(this.state.sum),text:y+n,sum:"0",sign:n});
    }
    else{
      if(this.state.sign=="+"){
        temp = Number(this.state.mem)+Number(this.state.sum);
        this.setState({mem:temp,text:temp.toString()+n,sum:"0",sign:n});
      }
      else if(this.state.sign=="-"){
        temp = Number(this.state.mem)-Number(this.state.sum);
        this.setState({mem:temp,text:temp.toString()+n,sum:"0",sign:n});
      }
      else if(this.state.sign=="x"){
        temp = Number(this.state.mem)*Number(this.state.sum);
        this.setState({mem:temp,text:temp.toString()+n,sum:"0",sign:n});
      }
      else if(this.state.sign=="/"){
        temp = Number(this.state.mem)/Number(this.state.sum);
        this.setState({mem:temp,text:temp.toString()+n,sum:"0",sign:n});
      }
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:0.8,backgroundColor:'black'}}>
        </View>
        <View style={{flex:2,backgroundColor:'black'}}>
            <Text style={styles.smallText}>{this.state.text}</Text>
            <Text style={styles.titleText}>{this.state.sum}</Text>
        </View>
        <View style={{flex:1,flexDirection: 'row'}}>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign2}  onPress = {()=>this.btnClear()}>
                <Text style={styles.txtblack2}>AC</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign2}>
                <Text style={styles.txtblack2}>+/-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign2} onPress = {()=>this.btnSign("%")}>
                <Text style={styles.txtblack}>%</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign} onPress = {()=>this.btnSign("/")}>
                <Text style={styles.num}>÷</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex:1,flexDirection: 'row'}}>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("7")}>
                <Text style={styles.num}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("8")}>
                <Text style={styles.num}>8</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("9")}>
                <Text style={styles.num}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign} onPress = {()=>this.btnSign("x")}>
                <Text style={styles.num}>x</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex:1,flexDirection: 'row'}}>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("4")}>
                <Text style={styles.num}>4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("5")}>
                <Text style={styles.num}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("6")}>
                <Text style={styles.num}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign} onPress = {()=>this.btnSign("-")}>
                <Text style={styles.num}>-</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex:1,flexDirection: 'row'}}>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("1")}>
                <Text style={styles.num}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("2")}>
                <Text style={styles.num}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum} onPress = {()=>this.btnNum("3")}>
                <Text style={styles.num}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign} onPress = {()=>this.btnSign("+")}>
                <Text style={styles.num}>+</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex:1,flexDirection: 'row'}}>
            <View style={styles.bgBlack2}>
              <TouchableOpacity style={styles.btnZero} onPress = {()=>this.btnNum("0")}>
                <Text style={styles.num}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnNum}>
                <Text style={styles.num}>,</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bgBlack}>
              <TouchableOpacity style={styles.btnSign} onPress = {()=>this.btnEqual()}>
                <Text style={styles.num}>=</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgBlack2 : {
    flex:2,
    backgroundColor:'black'
  },

  bgBlack : {
    flex:1,
    backgroundColor:'black'
  },
  btnZero : {
    paddingRight : 110,
    alignItems: 'center',
    weight:80,
    height:80,
    backgroundColor: '#333134',
    padding: 10,
    margin:10,
    borderRadius:50,
    fontSize: 45,
    textAlign : 'center',
  },
  num : {
    fontFamily: 'Browallia New',
    textAlign:'left',
    color: 'white',
    fontSize: 39
  },
  txtblack : {
    color: 'black',
    fontSize: 39
  },
  txtblack2 : {
    color: 'black',
    fontSize: 34
  },
  btnNum : {
    alignItems: 'center',
    weight:80,
    height:74,
    backgroundColor: '#333134',
    padding: 10,
    margin:10,
    borderRadius:50,
    fontSize: 45,
    textAlign : 'center',
  },
  
  btnSign : {
    alignItems: 'center',
    weight:80,
    height:74,
    backgroundColor: '#fe9426',
    padding: 10,
    margin:10,
    borderRadius:50,
    fontSize: 45,
    textAlign : 'center'
  },
  btnSign2 : {
    alignItems: 'center',
    weight:80,
    height:74,
    backgroundColor: '#a7a5a8',
    padding: 10,
    margin:10,
    borderRadius:50,
    fontSize: 45,
    textAlign : 'center'
  },
  titleText: {
    paddingRight : 30,
    paddingTop : 20,
    fontFamily: 'Browallia New',
    fontSize: 60,
    color: 'white',
    textAlign : 'right',
  },
  smallText: {
    paddingRight : 40,
    paddingTop : 40,
    fontFamily: 'Browallia New',
    fontSize: 20,
    color: 'white',
    textAlign : 'right',
  },

});