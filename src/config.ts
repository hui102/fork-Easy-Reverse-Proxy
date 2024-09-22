export let PORT = 370; // 端口

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
        domain: "daili.yinyue.v6.rocks",
        url: "https://www.google.com/",
        enable: true
    }
]
