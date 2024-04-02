export async function handleRequest(request) {

    return {
        status: 200,
        headers: { "content-type": "text/plain" },
        body: "Hello from Spin - Local Dev JS-SDK"
    }
}
