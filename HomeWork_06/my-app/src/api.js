import axios from 'axios';

export default axios.create({
    baseURL: 'https://5ed92e944378690016c6adc3.mockapi.io/api/contacts',
    headers: {
        'Content-Type': 'application/json',
    },
});