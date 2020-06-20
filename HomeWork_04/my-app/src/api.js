import axios from 'axios';

export default axios.create({
    baseURL: 'https://5eec122f5e298b0016b69669.mockapi.io/api/stickers/',
    headers: {
        'Content-Type': 'application/json',
    },
});