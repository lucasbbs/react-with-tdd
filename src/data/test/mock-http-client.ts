import { HttpPostClient } from "data/protocols/http/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {
      url?: string
      post(params: string): Promise<void> {
        this.url = params;
        return Promise.resolve();
      }

    };