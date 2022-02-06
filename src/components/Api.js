export default class Api {
    constructor(url) {
        this.url=url;
    }

    async getApi() {
        
        const response = await fetch(`${this.url}`);
        if (!response.ok){
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
        }
        return await response.json();
        };
        async postApi(user){
           
              
              let response = await fetch(`${this.url}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              });
              
              
        }


    }