type HttpClientGet = {
    url: string,
    method?: "POST" | "GET",
    body?: object | null

}

class HttpClient {
    async get({ url, method = "GET" }: HttpClientGet) {
        const option = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
        }

        const response = await fetch(url, option);
        const data = await response.json();
        return data;

    }

    async post({ url, method = "POST", body = null }: HttpClientGet) {
        const option = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }

        try {
            const response = await fetch(url, option);
            const data = await response.json();
            return data;
        } catch (error) {
            alert("Ops Houve um error");

            return "";

        }
    }
}

export default HttpClient;