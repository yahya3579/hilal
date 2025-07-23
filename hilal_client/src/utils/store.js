import { create } from 'zustand';

const useAuthStore = create((set) => ({
    accessToken: null,
    userId: null,
    refreshToken: null,
    userRole: null,
    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),
    setUserRole: (role) => set({ userRole: role }),
    setUserId: (id) => set({ userId: id }),
    clearTokens: () => set({ accessToken: null, refreshToken: null, userRole: null }),
}));

export default useAuthStore;

