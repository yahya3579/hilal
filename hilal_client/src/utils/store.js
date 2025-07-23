import { create } from 'zustand';

const useAuthStore = create((set) => ({
    accessToken: null,
    refreshToken: null,
    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),
    clearTokens: () => set({ accessToken: null, refreshToken: null }),
}));

export default useAuthStore;
