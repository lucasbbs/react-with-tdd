import { HttpPostClient } from "data/protocols/http/http-post-client"
import { RemoteAuthentication } from "./remote-authentication"


describe('RemoteAuthentication', () => { 
  test('should call http cliente with correct url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
      }

    };

    const url = 'http://any-url.com'
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
   })
 })