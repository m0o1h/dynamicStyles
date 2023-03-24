import React,{useState, useEffect} from 'react';
import { View, Text, FlatList, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Styles } from './Styles';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';

const data = require('../data.json');

export default function Inputs() {
  const [date, setDate] = useState(new Date()); 
  const [selectedOption, setSelectedOption] = useState(); 
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState();


  useEffect(() => {
    if (data[0].type === 'datepicker') {
      const dateObject = moment(data[0].text, 'MM/DD/YYYY').toDate();
      setDate(new Date(dateObject));
      setSelectedOption(data[1].options.find((option) => option.checked).optionId);
  
      const selectedQuestionOption = data[1].options.find(option => option.questions.find(questionOption => questionOption.options.find(checkedOption => checkedOption.checked)))
      const selectedQuestionOptionText = selectedQuestionOption.text
      setSelectedValue(selectedQuestionOptionText)

    } else if (data[0].type === 'radio') {
      const dateObject = moment(data[1].text, 'MM/DD/YYYY').toDate();
      setDate(new Date(dateObject));
      setSelectedOption(data[0].options.find((option) => option.checked).optionId);

      const selectedQuestionOption = data[0].options.find(option => option.questions.find(questionOption => questionOption.options.find(checkedOption => checkedOption.checked)))
      const selectedQuestionOptionText = selectedQuestionOption.text
      setSelectedValue(selectedQuestionOptionText)
    }
  }, []);
  
  
  

  const onChange = (event, value) => {
    setDate(value);
    if(Platform.OS==='android'){
        setVisible(false)
    }
}

  const showPicker =()=>{
    setVisible(true)
}

const handleSelect = (optionId) => {
  setSelectedOption(optionId);
}


  return (
    <View style={{...Styles.container, flex:1}} >
      <FlatList
      data={data}
      keyExtractor={(question) => question.questionId.toString()}
      renderItem={({ item: question }) => (
        <View key={question.questionId} style={{...Styles.mainFlatListContainer}} >
        <Text style={Styles.mainQuestionText} >{question.question}</Text>
        {question.type === 'datepicker' && (
          <View style={Styles.datePickerContainer} >
            <TouchableOpacity
            onPress={showPicker}
            style={Styles.datePickerButton}
            >
            <Text style={Styles.datePickerButtonText} >{date.toUTCString().slice(0, -12)}</Text>
            </TouchableOpacity>

            {visible && 
              <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS==='ios' ? 'spinner' :'spinner'}
              onChange={onChange}
              ></DateTimePicker>
            }
         
          </View>
        )}
        {question.type === 'radio' && (
          <View>
            <View style={{flex: 1}}>
              <FlatList
                data={[question.options[0], question.options[1]]}
                keyExtractor={(option) => option.optionId}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item: option }) => (
                <View style={Styles.radioButtonViewContainer}>
                  <TouchableOpacity
                    onPress={()=>handleSelect(option.optionId)}
                    style={{...Styles.radioButtonTouchableContainer,}}
                  >
                    <View style={{...Styles.radioButton, backgroundColor: selectedOption === option.optionId? 'green' : 'white'}}>
                      <Text style={{...Styles.radioButtonLabel, color: selectedOption === option.optionId? 'white' : 'black'}}>{option.text}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                )}
                />
            </View>
            
            <FlatList
            data={question.options}
            keyExtractor={(option) => option.optionId}
            renderItem={({item: option }) => (
              <View >
                {option.questions && selectedOption === option.optionId && (
                <View>
                  <FlatList
                  data={option.questions}
                  keyExtractor={(question) => question.questionId}
                  //numColumns={2}
                  renderItem={({item: question }) => (
                    <View key={question.questionId}>
                    <Text style={Styles.mainQuestionText} >{question.question}</Text>
                    {question.type === 'dropdown' && (
                      <View style={Styles.pickerContainer} >
                        {/* {console.log(selectedValue)} */}
                      <Picker
                        selectedValue={selectedValue !=null ? selectedValue : '' }
                          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                          style={Styles.picker}
                      >
                      {question.options.map((option) => (
                        <Picker.Item
                        key={option.optionId}
                        label={option.text}
                        value={option.text}
                        style={Styles.pickerItems}
                        />
                      ))}
                      </Picker>
                      </View>
                    )}
                  </View>
                  )}
                  ></FlatList>
                </View>
              )}
              </View>
            )}
            ></FlatList>
          </View>
        )}
      </View>
      )}
      ></FlatList>

      <View style={Styles.bottomButtonContainer} >
      <TouchableOpacity
      onPress={()=>alert('You will be moved to next Page')}
      style={Styles.bottomButton}
      >
        <Text style={Styles.bottomButtonText} >Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

