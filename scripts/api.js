const url = 'https://booking-com15.p.rapidapi.com/api/v1/test';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    //'x-rapidapi-key': 'SUA_CHAVE_AQUI' // Substitua pela sua chave da RapidAPI
  }
};

async function testarAPI() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error('Erro ao chamar API:', error);
  }
}

testarAPI();
