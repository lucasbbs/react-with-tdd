export interface HttpPostClient {
  post: (params: string) => Promise<void>
}
