import {
  createContext,
  useContext,
  // useEffect
} from "react";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";

// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { ILoginData, loginMutation } from "@/api/mutations/login";
// import { ILogoutData, logoutMutation } from "@/api/mutations/logout";
// import {
//   ForgotPasswordPayload,
//   forgotPasswordMutation,
// } from "./mutations/forgotPassword";
// import { getMe } from "./query/me";

// export const useLogin = () => {
//   const qc = useQueryClient();

//   // const router = useRouter();

//   const { mutateAsync: login, isPending } = useMutation({
//     mutationKey: ["login"],
//     mutationFn: (loginData: ILoginData) => loginMutation(loginData),
//     onSuccess: (response) => {
//       toast.success(response.message);
//       qc.invalidateQueries({ queryKey: ["me"] });
//       router.push("/");
//     },
//     onError: () => {
//       toast.error("Invalid Credentials, Please check your email and password");
//     },
//   });

//   return { login, isPending };
// };

// export const useLogout = () => {
//   const router = useRouter();

//   const { mutateAsync: logout, isPending } = useMutation({
//     mutationKey: ["logout"],
//     mutationFn: (logoutData: ILogoutData) => logoutMutation(logoutData),
//     onSuccess: (response) => {
//       router.replace("/login");
//       toast.success(
//         response.message || "Logged Out Successfully from the Current Device"
//       );
//     },
//   });

//   return { logout, isPending };
// };

// export const useForgotPassword = () => {
//   const { mutateAsync: forgotPassword, isPending } = useMutation({
//     mutationKey: ["forgotPassword"],
//     mutationFn: (forgotData: ForgotPasswordPayload) =>
//       forgotPasswordMutation(forgotData),
//     onSuccess: (response) => {
//       toast.success(response);
//     },
//     onError: (error) => {
//       console.log("QWE", error);
//       toast.error("Cannot find an account with this email address");
//     },
//   });

//   return { forgotPassword, isPending };
// };

// export const useMe = () => {
//   return useQuery({
//     queryKey: ["me"],
//     queryFn: () => getMe(),
//     staleTime: 1000 * 60 * 2, // 2 minutes
//     retry: false,
//   });
// };

interface AuthContext {
  user: //  Awaited<ReturnType<typeof getMe>> |
  null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

// const PATHS_WITHOUT_ME = ["/login", "/forgot-password", "/reset-password"];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // const { data: user, isPending, isError } = useMe();

  // const router = useRouter();
  // const pathname = usePathname();

  // const [token, setToken, removeToken] = useLocalStorage({
  //   key: "token",
  //   serialize: (v) => v,
  // });

  // useEffect(() => {
  //   if (user?.token && user.token !== token) {
  //     setToken(user.token);
  //   }

  //   if (!user?.token && token) {
  //     removeToken();
  //   }
  // }, [user?.token, token]);

  // useEffect(() => {
  //   if (
  //     isError &&
  //     !PATHS_WITHOUT_ME.find((path) => pathname.startsWith(path))
  //   ) {
  //     router.push("/login");
  //     toast.error("Your session has expired. Please login again.");
  //     removeToken();
  //   }
  // }, [isError, pathname]);

  return (
    <AuthContext.Provider
      value={{
        user:
          //  user ||
          null,
        isAuthenticated:
          // !!user?.token
          true,
        isLoading:
          // isPending
          false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
