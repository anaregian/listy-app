class Fetcher {
  private hostUrl: string;

  constructor(hostUrl: string) {
    this.hostUrl = hostUrl;
  }

  public async get(path: string): Promise<Response> {
    return await fetch(this.hostUrl + path);
  }

  public async post<Body>(path: string, body?: Body): Promise<Response> {
    return await fetch(this.hostUrl + path, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: body ? JSON.stringify(body) : undefined
    });
  }

  public async put<Body>(path: string, body?: Body): Promise<Response> {
    return await fetch(this.hostUrl + path, {
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: body ? JSON.stringify(body) : undefined
    });
  }

  public async delete(path: string): Promise<Response> {
    return await fetch(this.hostUrl + path, {
      method: "DELETE"
    });
  }

  public async fetch(path: string, options?: RequestInit): Promise<Response> {
    return await fetch(this.hostUrl + path, options);
  }
}

export const fetcher = new Fetcher("http://localhost:5000");
