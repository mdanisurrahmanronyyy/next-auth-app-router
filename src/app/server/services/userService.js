export const userService = {
    authenticate,
  };
  
  function authenticate(username, password) {
    console.log(username);
    console.log(password);
    if (username !== 'admin' && password !== 'admin') {
      return null;
    }
  
    const user = {
      id: '9001',
      name: 'Web Admin',
      email: 'admin@example.com',
    };
  
    return user;
  }
  