import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QqgkB_3d5yJ-I7uVOrF0DXmYrFiVKFdCcs5nrEtvBsBMDxw0b8bdnUmFL_aIrZw8bqEUGOsyI-PWlztuDrL2020CWdS5GaSjcK5YcYwYiP_rgjy7sEnpO6J8gYRYYHYx'
    }
});
