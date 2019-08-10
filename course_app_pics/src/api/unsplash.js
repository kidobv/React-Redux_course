import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eca10f34d3ac8c233aa95b8aae59d936a1e002ca2a4698d3e73c73681ff4de1c'
    }
});