import {combineReducers} from 'redux';
import contacts from './contacts';
import validators from './validators';

export default combineReducers( {contacts, validators} )