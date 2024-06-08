import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('https://api.github.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const searchUsers = async (text) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${text}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repos:', error);
    throw error;
  }
};
