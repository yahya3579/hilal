import { create } from 'zustand';

const useAuthStore = create((set) => ({
    accessToken: null,
    userId: null,
    refreshToken: null,
    userRole: null,
    isAuthorized: null,
    authTrigger: 0,
    setIsAuthorized: (status) => set({ isAuthorized: status }),
    setAccessToken: (token) => set({ accessToken: token }),
    setRefreshToken: (token) => set({ refreshToken: token }),
    setUserRole: (role) => set({ userRole: role }),
    setUserId: (id) => set({ userId: id }),
    clearTokens: () => set({ accessToken: null, refreshToken: null, userRole: null, userId: null, isAuthorized: false }),
    triggerAuth: () => set((state) => ({ authTrigger: state.authTrigger + 1 })), // increment to trigger
}));

export default useAuthStore;

