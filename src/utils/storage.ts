/* eslint-disable @typescript-eslint/no-unused-vars */
export const storage = {
get<T>(key: string, fallback: T): T {
try {
const raw = localStorage.getItem(key)
return raw ? (JSON.parse(raw) as T) : fallback
} catch (e) {
return fallback
}
},
set(key: string, value: unknown) {
localStorage.setItem(key, JSON.stringify(value))
}
}