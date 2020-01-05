import axios from 'axios';

const KEY = 'AIzaSyC5715oH_RrQDvlJYcvg9T020rB-f_Z_5g';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});

