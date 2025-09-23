// 任意需要用的文件里（或放到一个 utils/basePath.ts 里复用）
export const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? ""; // 本地为空，线上设置为 "/portfolio"
