const baseUrl =  'http://localhost:5000'


const getAll = async () => {
  const res = await fetch(`${baseUrl}`, {
    method: 'GET',
    headers: {
    }
  });
  
  const data = await res.text();
  
  return data;

};

export { getAll }