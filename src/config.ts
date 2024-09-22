export let PORT = 9600; // 端口

export interface Proxy {
    domain: string;
    url: string;
    enable: boolean;
    replaces?: {
        old: string,
        new: string
    }[];
}

// 代理
let PROXYS: Proxy[] = [
    {
        domain: "fork-easy-reverse-proxy.vercel.app",
        url: "https://www.google.com/",
        enable: true
    }
]
