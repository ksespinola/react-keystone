import React, { createClass } from 'react';
import WYSIWYG from '../../_lib/wysiwyg';
import Datepicker from '../../_lib/datepicker';
import Form from 'react-formal';
import Field from '../../_lib/field.jsx';
import { 
  DropdownList,
  Multiselect } from 'react-widgets';
import { Navigation } from 'react-router';

const BasicForm = createClass({
  
  getInitialState(){  
    return {
      doc:this.props.doc ? this.props.doc.toJS() : {},
    }
  },

  componentWillReceiveProps(props){
    props.doc && this.setState({doc:props.doc.toJS()});
  },

  render(){
    const {
      doc,
      } = this.state;
    const{
      def,
      users,
      topics,
      onSubmit,
      submitLabel,
      } = this.props;
    const schema = def.get('schema');
    return (
      <Form
        noValidate
        className='basic'
        schema={schema}
        defautValue={schema.default()}
        value={doc}
        onChange={doc => this.setState({doc})}
        onSubmit={onSubmit}
        >
        <Form.Summary />
        <Field name='title'/>
        <Field name='host' type={DropdownList} data={users.toArray().map( map => map.toJS())} textField='email' valueField='_id' />
        <Field name='date' type={Datepicker}/>
        <Field name='description' type={WYSIWYG}/>
        <Field name='topics'  type={Multiselect} data={topics.toArray().map( map => map .toJS() )} textField='name' valueField='_id'/>
        <Form.Button type='submit' className='submit'>{submitLabel}</Form.Button>
      </Form>
    )
  },
  
});

export default BasicForm;

